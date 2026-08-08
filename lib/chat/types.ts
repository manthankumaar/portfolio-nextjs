export const WELCOME_DELAY_MS = 1000;
export const MESSAGE_STAGGER_DELAY_MS = 1300;

export type ChatRole = 'user' | 'assistant' | 'system';

export type UiMessage = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  /** How many \\n\\n parts are currently visible (assistant stagger). */
  visibleParts?: number;
};

export function splitMessageParts(content: string): string[] {
  return String(content || '')
    .split(/\n\n+/)
    .map((part) => part.trim())
    .filter(Boolean);
}

export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
