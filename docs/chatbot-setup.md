# Portfolio chatbot — setup & interview guide

This documents the “Ask Manthan” widget: an Origa-like floating chat UI backed by a Next.js API route that calls OpenAI with a grounded profile document.

## Architecture (30-second version)

```
Browser ChatWidget
  → POST /api/chat { messages }
    → Next.js Route Handler (server only)
      → system prompt + knowledge from lib/portfolio.ts
      → OpenAI Chat Completions
    ← { content }
  → client splits content on blank lines and staggers bubbles
```

**Why an API route?** The OpenAI key must never ship to the browser. Route Handlers run on the server (Vercel serverless).

**Why not fine-tune?** Fine-tuning is expensive and slow to update. Injecting a curated “knowledge document” into the system prompt (RAG-lite) is enough for a personal portfolio and easy to keep in sync with `lib/portfolio.ts`.

**Why stagger?** Product UX copied from Origa’s widget: multi-paragraph assistant replies are revealed one bubble at a time with a typing indicator between parts.

## Local setup

1. Copy env template:

```bash
cp .env.example .env.local
```

2. Add your key from https://platform.openai.com/api-keys:

```
OPENAI_API_KEY=sk-...
OPENAI_MODEL=gpt-4o-mini
```

3. Run the app:

```bash
npm run dev
```

4. Open the site → click the avatar FAB (bottom-right) → ask a question.

## Vercel setup

1. Project → Settings → Environment Variables  
2. Add `OPENAI_API_KEY` (Production + Preview)  
3. Optional: `OPENAI_MODEL`  
4. Redeploy  

Without the key, `/api/chat` returns **503** with a clear message (widget shows that error).

## Key files

| File | Role |
|------|------|
| `lib/chat/knowledge.ts` | Builds the profile markdown + welcome + suggestion chips |
| `lib/chat/system-prompt.ts` | Persona, tone, hard rules + embeds knowledge |
| `app/api/chat/route.ts` | Validates history, calls OpenAI, returns `{ content }` |
| `app/components/chat/ChatWidget.tsx` | FAB launcher |
| `app/components/chat/ChatPanel.tsx` | Panel UI |
| `app/components/chat/useChatStagger.ts` | Welcome delay (1s) + stagger (1.3s) |

## Stagger behavior (Origa-aligned)

Constants (same idea as `origa-chat.js`):

- `WELCOME_DELAY_MS = 1000` — typing, then welcome after open  
- `MESSAGE_STAGGER_DELAY_MS = 1300` — delay between `\n\n` parts  
- Split regex: `/\n\n+/`  

Flow:

1. Full assistant string arrives from the API (no streaming in v1).  
2. Client splits into parts.  
3. Shows part 1; typing dots; after 1.3s shows part 2; repeat.  
4. `prefers-reduced-motion` → show everything immediately.

The system prompt asks the model to separate ideas with blank lines so stagger looks natural.

## Security talking points

- API key only in server env — never `NEXT_PUBLIC_*`.  
- Validate/truncate message history (last 12, max length per message).  
- Grounding rules in the system prompt reduce hallucination; still not a legal guarantee.  
- For production hardening later: rate limiting (IP / Vercel KV), CORS defaults (same-origin fetch), abuse monitoring.

## Cost notes

- Default model `gpt-4o-mini` keeps portfolio traffic cheap.  
- Stateless: each request resends recent history + the system prompt (knowledge size is small).  
- Upgrade path: stream tokens, cache the system prompt, or move knowledge to embeddings + retrieval if the corpus grows.

## Sample interview Q&A

**Q: How does this chatbot know about you?**  
A: I serialize my portfolio data into a markdown knowledge document and inject it into the system prompt on every request. The model is instructed to answer only from that document.

**Q: Why not put the OpenAI call in the client?**  
A: That would expose the API key. The browser only talks to my `/api/chat` route; the route holds the secret.

**Q: How would you add real RAG later?**  
A: Chunk resume/projects into embeddings (e.g. pgvector / Pinecone), retrieve top-k chunks per query, and pass those chunks instead of (or in addition to) the full profile blob.

**Q: How did you get the Origa-like feel?**  
A: I ported the UX timings—welcome delay and multi-bubble stagger on `\n\n`—into a React hook, and styled the launcher/panel to match the portfolio dark theme instead of embedding Origa’s script.

**Q: What happens if the key is missing?**  
A: The route returns 503 with a friendly error; the UI surfaces it. Deployments without env config fail safely.

## Manual test checklist

- [ ] Open widget → welcome appears after ~1s with typing  
- [ ] Multi-paragraph reply staggers with typing between bubbles  
- [ ] Questions about Origa / ReachInbox / stack / contact stay factual  
- [ ] Unknown topics deflect to email  
- [ ] `OPENAI_API_KEY` not present in client JS bundle  
- [ ] Mobile: panel fits viewport; page still scrolls behind  
