import { type Component } from 'svelte';
import { NSVRoot } from './dom';
import { init, startApp } from './nativescript';
import { registerElement } from './registry';
import { createRenderer, type RenderTreeNode } from './renderer';

type RootComponentWithRenderer = Component & {
  nsvRender?: (props: Record<string, unknown>) => RenderTreeNode;
};

export interface AppInstance {
  mount: (props?: Record<string, unknown>) => void;
  unmount: () => void;
  start: () => void;
  root: NSVRoot;
}

export function createApp(RootComponent: Component): AppInstance {
  init();
  const root = new NSVRoot();
  const renderer = createRenderer();
  const rootComponent = RootComponent as RootComponentWithRenderer;

  return {
    mount(props: Record<string, unknown> = {}) {
      if (typeof rootComponent.nsvRender === 'function') {
        renderer.renderTree(rootComponent.nsvRender(props), root);
        return;
      }

      throw new Error('NativeScript-SvelteKit mount() requires RootComponent.nsvRender outside browser DOM environments.');
    },
    unmount() {
      root.childNodes.splice(0, root.childNodes.length);
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
