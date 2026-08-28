import { NSVElement } from '../../dom';

function parseStyleText(text: string): Record<string, string> {
  return text
    .split(';')
    .map((part) => part.trim())
    .filter(Boolean)
    .reduce<Record<string, string>>((styles, declaration) => {
      const [key, ...rest] = declaration.split(':');
      if (!key || rest.length === 0) {
        return styles;
      }

      styles[key.trim()] = rest.join(':').trim();
      return styles;
    }, {});
}

export function patchStyle(el: NSVElement, prevValue: unknown, nextValue: unknown): void {
  if (prevValue && typeof prevValue === 'object' && !Array.isArray(prevValue)) {
    for (const key of Object.keys(prevValue as Record<string, unknown>)) {
      if (!nextValue || typeof nextValue !== 'object' || Array.isArray(nextValue) || !(key in (nextValue as object))) {
        el.setStyle(key, undefined);
      }
    }
  }

  if (typeof nextValue === 'string') {
    const styles = parseStyleText(nextValue);
    for (const [key, value] of Object.entries(styles)) {
      el.setStyle(key, value);
    }
    return;
  }

  if (nextValue && typeof nextValue === 'object' && !Array.isArray(nextValue)) {
    for (const [key, value] of Object.entries(nextValue as Record<string, unknown>)) {
      el.setStyle(key, value);
    }
  }
}
