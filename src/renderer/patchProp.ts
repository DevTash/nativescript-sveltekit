import { NSVElement } from '../dom';
import { patchAttr } from './modules/attrs';
import { patchClass } from './modules/class';
import { patchEvent } from './modules/events';
import { patchStyle } from './modules/style';

export function patchProp(el: NSVElement, key: string, prevValue: unknown, nextValue: unknown): void {
  if (key === 'class' || key === 'className') {
    patchClass(el, nextValue);
    return;
  }

  if (key === 'style') {
    patchStyle(el, prevValue, nextValue);
    return;
  }

  if (/^on[:A-Z]/.test(key) || key.startsWith('on:')) {
    patchEvent(el, key, prevValue, nextValue);
    return;
  }

  patchAttr(el, key, nextValue);
}
