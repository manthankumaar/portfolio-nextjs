'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { XMarkIcon, PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { SUGGESTED_PROMPTS } from '@/lib/chat/knowledge';
import { splitMessageParts, type UiMessage } from '@/lib/chat/types';
import { profile } from '@/lib/portfolio';
import { cn } from '@/lib/utils';
import { LinkifiedText } from './LinkifiedText';

type ChatPanelProps = {
  messages: UiMessage[];
  showTyping: boolean;
  input: string;
  error: string | null;
  onInputChange: (value: string) => void;
  onSend: (text?: string) => void;
  onClose: () => void;
};

const assistantLinkClass =
  'break underline decoration-[rgba(247,244,190,0.55)] underline-offset-2 text-[rgb(247,244,190)] break-all hover:opacity-90';
const userLinkClass =
  'underline decoration-[#1f1f1f]/60 underline-offset-2 break-all hover:opacity-80';

function TypingDots() {
  return (
    <div
      className='flex max-w-[85%] gap-1 self-start rounded-2xl rounded-bl-sm border border-[#2b2b2b] bg-[#27272a] px-4 py-3'
      aria-label='Assistant is typing'
    >
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className='size-1.5 animate-bounce rounded-full bg-[#9d9d9d]'
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </div>
  );
}

function AssistantBubbles({ message }: { message: UiMessage }) {
  const parts = splitMessageParts(message.content);
  const visible =
    message.visibleParts == null
      ? parts.length
      : Math.min(message.visibleParts, parts.length);
  const shown = parts.slice(0, visible);
  const allVisible = visible >= parts.length;

  return (
    <div className='flex max-w-[85%] flex-col gap-2 self-start'>
      {shown.map((part, index) => (
        <div
          key={`${message.id}-${index}`}
          className='rounded-2xl rounded-bl-sm border border-[#2b2b2b] bg-[#27272a] px-3 py-2 font-mono text-[12px] leading-5 text-[#e4e4e7] whitespace-pre-wrap'
        >
          <LinkifiedText text={part} linkClassName={assistantLinkClass} />
        </div>
      ))}
      {allVisible ? (
        <span className='px-1 font-mono text-[10px] text-[#666]'>
          {profile.name.split(' ')[0]}
        </span>
      ) : null}
    </div>
  );
}

export function ChatPanel({
  messages,
  showTyping,
  input,
  error,
  onInputChange,
  onSend,
  onClose,
}: ChatPanelProps) {
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [messages, showTyping]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const showSuggestions =
    messages.length > 0 &&
    messages.every((m) => m.role === 'assistant') &&
    !showTyping;

  return (
    <div
      className='flex h-[calc(100dvh-5.5rem)] w-[calc(100vw-1.5rem)] flex-col overflow-hidden rounded-2xl border border-[#2b2b2b] bg-[#181818] shadow-[0_16px_56px_rgba(0,0,0,0.55)] sm:h-[min(600px,calc(100dvh-7rem))] sm:w-[400px] xl:h-[min(640px,calc(100dvh-7rem))] xl:w-[440px]'
      role='dialog'
      aria-label='Ask Manthan chat'
    >
      <header className='flex items-center gap-3 border-b border-[#2b2b2b] bg-[#1f1f1f] px-4 py-3'>
        <div className='relative size-9 overflow-hidden rounded-full border border-[#2b2b2b]'>
          <Image
            src={profile.avatar}
            alt={profile.name}
            fill
            className='object-cover object-top'
            sizes='36px'
          />
        </div>
        <div className='min-w-0 flex-1'>
          <p className='truncate font-mono text-sm font-medium text-white'>
            Ask {profile.name.split(' ')[0]}
          </p>
          <p className='truncate font-mono text-[11px] text-[#9d9d9d]'>
            Portfolio assistant
          </p>
        </div>
        <button
          type='button'
          onClick={onClose}
          aria-label='Close chat'
          className='rounded-md p-1.5 text-[#9d9d9d] transition-colors hover:bg-[#2b2b2b] hover:text-white'
        >
          <XMarkIcon className='size-5' />
        </button>
      </header>

      <div
        ref={listRef}
        className='flex flex-1 flex-col gap-4 overflow-y-auto px-3 py-4'
      >
        {messages.map((message) =>
          message.role === 'user' ? (
            <div
              key={message.id}
              className='max-w-[85%] self-end rounded-2xl rounded-br-sm bg-[rgb(247,244,190)] px-3 py-2 font-mono text-[12px] leading-5 text-[#1f1f1f] whitespace-pre-wrap'
            >
              <LinkifiedText
                text={message.content}
                linkClassName={userLinkClass}
              />
            </div>
          ) : (
            <AssistantBubbles key={message.id} message={message} />
          )
        )}
        {showTyping ? <TypingDots /> : null}
        {showSuggestions ? (
          <div className='flex flex-wrap gap-2 pt-1'>
            {SUGGESTED_PROMPTS.map((prompt) => (
              <button
                key={prompt}
                type='button'
                onClick={() => onSend(prompt)}
                className='rounded-full border border-[#2b2b2b] bg-[#1f1f1f] px-3 py-1.5 font-mono text-[11px] text-[#b1b1b1] transition-colors hover:border-[rgba(247,244,190,0.4)] hover:text-[rgb(247,244,190)]'
              >
                {prompt}
              </button>
            ))}
          </div>
        ) : null}
        {error ? (
          <p className='rounded-md border border-red-900/50 bg-red-950/40 px-3 py-2 font-mono text-[11px] text-red-300'>
            {error}
          </p>
        ) : null}
      </div>

      <form
        className='flex items-end gap-2 border-t border-[#2b2b2b] bg-[#1f1f1f] p-3'
        onSubmit={(e) => {
          e.preventDefault();
          onSend();
        }}
      >
        <textarea
          ref={inputRef}
          rows={1}
          value={input}
          onChange={(e) => onInputChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              onSend();
            }
          }}
          placeholder='Ask about experience, projects…'
          className={cn(
            'max-h-28 min-h-[40px] flex-1 resize-none rounded-xl border border-[#2b2b2b] bg-[#181818] px-3 py-2.5',
            'font-mono text-[12px] text-white placeholder:text-[#666]',
            'outline-none focus:border-[rgba(247,244,190,0.45)]'
          )}
        />
        <button
          type='submit'
          aria-label='Send message'
          disabled={!input.trim()}
          className='flex size-10 shrink-0 items-center justify-center rounded-full bg-[rgb(247,244,190)] text-[#1f1f1f] transition-opacity disabled:opacity-40'
        >
          <PaperAirplaneIcon className='size-4' />
        </button>
      </form>
    </div>
  );
}
