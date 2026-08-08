import { NextResponse } from 'next/server';
import { buildSystemPrompt } from '@/lib/chat/system-prompt';

export const runtime = 'nodejs';

type ChatRole = 'user' | 'assistant' | 'system';

type ChatMessage = {
  role: ChatRole;
  content: string;
};

const MAX_HISTORY = 12;
const MAX_CONTENT_LENGTH = 4000;

function isValidMessage(value: unknown): value is ChatMessage {
  if (!value || typeof value !== 'object') return false;
  const msg = value as ChatMessage;
  return (
    (msg.role === 'user' || msg.role === 'assistant') &&
    typeof msg.content === 'string' &&
    msg.content.trim().length > 0 &&
    msg.content.length <= MAX_CONTENT_LENGTH
  );
}

export async function POST(request: Request) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          'Chat is not configured yet. Add OPENAI_API_KEY to your environment.',
      },
      { status: 503 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 });
  }

  const messagesRaw =
    body && typeof body === 'object' && Array.isArray((body as { messages?: unknown }).messages)
      ? (body as { messages: unknown[] }).messages
      : null;

  if (!messagesRaw || messagesRaw.length === 0) {
    return NextResponse.json(
      { error: 'messages array is required.' },
      { status: 400 }
    );
  }

  const messages = messagesRaw.filter(isValidMessage).slice(-MAX_HISTORY);
  if (messages.length === 0) {
    return NextResponse.json(
      { error: 'No valid messages provided.' },
      { status: 400 }
    );
  }

  const model = process.env.OPENAI_MODEL || 'gpt-4o-mini';

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model,
        temperature: 0.2,
        messages: [
          { role: 'system', content: buildSystemPrompt() },
          ...messages.map((m) => ({ role: m.role, content: m.content.trim() })),
        ],
      }),
    });

    if (!response.ok) {
      const status = response.status;
      if (status === 401) {
        return NextResponse.json(
          { error: 'OpenAI rejected the API key.' },
          { status: 502 }
        );
      }
      if (status === 429) {
        return NextResponse.json(
          { error: 'Rate limited — try again in a moment.' },
          { status: 429 }
        );
      }
      return NextResponse.json(
        { error: 'The model request failed. Please try again.' },
        { status: 502 }
      );
    }

    const data = (await response.json()) as {
      choices?: Array<{ message?: { content?: string } }>;
    };
    const content = data.choices?.[0]?.message?.content?.trim();

    if (!content) {
      return NextResponse.json(
        { error: 'Empty response from the model.' },
        { status: 502 }
      );
    }

    return NextResponse.json({ content });
  } catch {
    return NextResponse.json(
      { error: 'Unexpected server error talking to the model.' },
      { status: 500 }
    );
  }
}
