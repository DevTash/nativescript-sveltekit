import { NSVElement } from '../../dom';

const eventHandlers = new WeakMap<NSVElement, Map<string, (event?: unknown) => void>>();

export function patchEvent(el: NSVElement, key: string, prevValue: unknown, nextValue: unknown): void {
  const eventName = key.replace(/^on[:]?/, '').toLowerCase();
  const handlers = eventHandlers.get(el) ?? new Map<string, (event?: unknown) => void>();
  eventHandlers.set(el, handlers);

  const existing = handlers.get(eventName);
  if (existing) {
    el.off(eventName, existing);
    handlers.delete(eventName);
  }

  if (typeof nextValue !== 'function') {
    return;
  }

  const handler = nextValue as (event?: unknown) => void;
  handlers.set(eventName, handler);
  el.on(eventName, handler);
}
