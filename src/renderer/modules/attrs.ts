import { NSVElement } from '../../dom';

export function patchAttr(el: NSVElement, key: string, nextValue: unknown): void {
  if (nextValue == null || nextValue === false) {
    el.removeAttr(key);
    return;
  }

  el.setAttr(key, nextValue);
}
