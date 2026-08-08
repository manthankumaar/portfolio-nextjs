'use client';

import Image from 'next/image';
import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';
import { profile } from '@/lib/portfolio';
import { ChatPanel } from './ChatPanel';
import { useChatStagger } from './useChatStagger';
import { cn } from '@/lib/utils';

export function ChatWidget() {
  const {
    messages,
    open,
    showTyping,
    input,
    setInput,
    error,
    togglePanel,
    closePanel,
    sendMessage,
  } = useChatStagger();

  return (
    <div
      className='pointer-events-none fixed bottom-3 right-3 z-[2147483000] flex flex-col items-end gap-3 sm:bottom-5 sm:right-5'
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      {open ? (
        <div className='pointer-events-auto'>
          <ChatPanel
            messages={messages}
            showTyping={showTyping}
            input={input}
            error={error}
            onInputChange={setInput}
            onSend={sendMessage}
            onClose={closePanel}
          />
        </div>
      ) : null}

      <button
        type='button'
        onClick={togglePanel}
        aria-expanded={open}
        aria-label={open ? 'Close chat' : 'Open Ask Manthan chat'}
        className={cn(
          'pointer-events-auto flex size-14 items-center justify-center overflow-hidden rounded-full',
          'border border-[#2b2b2b] bg-[#181818] shadow-[0_4px_28px_rgba(0,0,0,0.45)]',
          'transition-transform duration-200 hover:scale-105',
          open && 'bg-[rgb(247,244,190)] text-[#1f1f1f]'
        )}
      >
        {open ? (
          <ChatBubbleLeftRightIcon className='size-6' />
        ) : (
          <span className='relative size-full'>
            <Image
              src={profile.avatar}
              alt=''
              fill
              className='object-cover object-top'
              sizes='56px'
            />
          </span>
        )}
      </button>
    </div>
  );
}
