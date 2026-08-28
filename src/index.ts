import type { Component } from 'svelte';
import { NSVRoot } from './dom';
import { init, startApp } from './nativescript';
import { registerElement } from './registry';
import { createRenderer } from './renderer';

export interface AppInstance {
  mount: (props?: Record<string, unknown>) => void;
  start: () => void;
  root: NSVRoot;
}

export function createApp(RootComponent: Component): AppInstance {
  init();
  const root = new NSVRoot();
  const renderer = createRenderer();

  return {
    mount(props: Record<string, unknown> = {}) {
      const component = RootComponent as unknown as {
        render?: (props: Record<string, unknown>) => { body: string };
      };
      const text = component.render?.(props)?.body ?? '';

      renderer.renderTree(
        {
          type: 'Page',
          children: [{ type: 'StackLayout', children: [text] }],
        },
        root,
      );
    },
    start() {
      startApp(() => root);
    },
    root,
  };
}

export { registerElement, init, startApp };
export * from './components';
export * from './dom';
export * from './nativescript';
export * from './plugins/modals';
export * from './plugins/navigation';
export * from './registry';
export * from './renderer';
