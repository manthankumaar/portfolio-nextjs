'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { WELCOME_MESSAGE } from '@/lib/chat/knowledge';
import {
  MESSAGE_STAGGER_DELAY_MS,
  WELCOME_DELAY_MS,
  prefersReducedMotion,
  splitMessageParts,
  type UiMessage,
} from '@/lib/chat/types';

function createId(prefix: string) {
  return `${prefix}_${Math.random().toString(36).slice(2, 10)}`;
}

export function useChatStagger() {
  const [messages, setMessages] = useState<UiMessage[]>([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [staggerTyping, setStaggerTyping] = useState(false);
  const [input, setInput] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [welcomeShown, setWelcomeShown] = useState(false);

  const staggerTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const welcomeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const activeStaggerIdRef = useRef<string | null>(null);
  const messagesRef = useRef(messages);
  messagesRef.current = messages;

  const clearStagger = useCallback(() => {
    if (staggerTimerRef.current) {
      clearTimeout(staggerTimerRef.current);
      staggerTimerRef.current = null;
    }
    setStaggerTyping(false);
    activeStaggerIdRef.current = null;
  }, []);

  const startAssistantStagger = useCallback(
    (messageId: string, totalParts: number) => {
      clearStagger();
      if (totalParts <= 1 || prefersReducedMotion()) return;

      activeStaggerIdRef.current = messageId;
      let visible = 1;

      const scheduleNext = () => {
        if (activeStaggerIdRef.current !== messageId) return;
        if (visible >= totalParts) {
          setMessages((prev) =>
            prev.map((m) =>
              m.id === messageId ? { ...m, visibleParts: undefined } : m
            )
          );
          clearStagger();
          return;
        }

        setStaggerTyping(true);
        staggerTimerRef.current = setTimeout(() => {
          if (activeStaggerIdRef.current !== messageId) return;
          setStaggerTyping(false);
          visible += 1;
          setMessages((prev) =>
            prev.map((m) =>
              m.id === messageId
                ? {
                    ...m,
                    visibleParts:
                      visible >= totalParts ? undefined : visible,
                  }
                : m
            )
          );
          if (visible < totalParts) {
            scheduleNext();
          } else {
            clearStagger();
          }
        }, MESSAGE_STAGGER_DELAY_MS);
      };

      scheduleNext();
    },
    [clearStagger]
  );

  const pushAssistantMessage = useCallback(
    (content: string) => {
      const id = createId('assistant');
      const parts = splitMessageParts(content);
      const reduced = prefersReducedMotion();
      const msg: UiMessage = {
        id,
        role: 'assistant',
        content,
        visibleParts: parts.length > 1 && !reduced ? 1 : undefined,
      };
      setMessages((prev) => [...prev, msg]);
      if (parts.length > 1 && !reduced) {
        startAssistantStagger(id, parts.length);
      }
    },
    [startAssistantStagger]
  );

  const closePanel = useCallback(() => {
    setOpen(false);
    if (welcomeTimerRef.current) {
      clearTimeout(welcomeTimerRef.current);
      welcomeTimerRef.current = null;
    }
  }, []);

  const togglePanel = useCallback(() => {
    setOpen((prev) => {
      if (prev) {
        if (welcomeTimerRef.current) {
          clearTimeout(welcomeTimerRef.current);
          welcomeTimerRef.current = null;
        }
        return false;
      }
      setError(null);
      return true;
    });
  }, []);

  useEffect(() => {
    if (!open || welcomeShown) return;

    if (prefersReducedMotion()) {
      pushAssistantMessage(WELCOME_MESSAGE);
      setWelcomeShown(true);
      return;
    }

    setStaggerTyping(true);
    welcomeTimerRef.current = setTimeout(() => {
      setStaggerTyping(false);
      pushAssistantMessage(WELCOME_MESSAGE);
      setWelcomeShown(true);
    }, WELCOME_DELAY_MS);

    return () => {
      if (welcomeTimerRef.current) {
        clearTimeout(welcomeTimerRef.current);
        welcomeTimerRef.current = null;
      }
    };
  }, [open, welcomeShown, pushAssistantMessage]);

  useEffect(() => {
    return () => {
      clearStagger();
      if (welcomeTimerRef.current) clearTimeout(welcomeTimerRef.current);
    };
  }, [clearStagger]);

  const sendMessage = useCallback(
    async (rawText?: string) => {
      const text = (rawText ?? input).trim();
      if (!text || loading || staggerTyping) return;

      setInput('');
      setError(null);
      clearStagger();

      const userMsg: UiMessage = {
        id: createId('user'),
        role: 'user',
        content: text,
      };

      const history = [...messagesRef.current, userMsg].map((m) => ({
        role: m.role,
        content: m.content,
      }));

      setMessages((prev) => [...prev, userMsg]);
      setLoading(true);

      try {
        const res = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: history }),
        });
        const data = (await res.json()) as { content?: string; error?: string };
        if (!res.ok) {
          setError(data.error || 'Something went wrong. Please try again.');
          return;
        }
        if (data.content) {
          pushAssistantMessage(data.content);
        } else {
          setError('Empty reply from the assistant.');
        }
      } catch {
        setError('Network error — check your connection and try again.');
      } finally {
        setLoading(false);
      }
    },
    [input, loading, staggerTyping, clearStagger, pushAssistantMessage]
  );

  return {
    messages,
    open,
    loading,
    showTyping: loading || staggerTyping,
    input,
    setInput,
    error,
    togglePanel,
    closePanel,
    sendMessage,
  };
}
