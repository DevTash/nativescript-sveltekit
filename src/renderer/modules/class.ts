import { NSVElement } from '../../dom';

export function patchClass(el: NSVElement, value: unknown): void {
  if (Array.isArray(value)) {
    el.setClassName(value.filter(Boolean).join(' '));
    return;
  }

  if (typeof value === 'object' && value !== null) {
    const className = Object.entries(value)
      .filter(([, enabled]) => Boolean(enabled))
      .map(([name]) => name)
      .join(' ');
    el.setClassName(className);
    return;
  }

  el.setClassName(typeof value === 'string' ? value : '');
}
