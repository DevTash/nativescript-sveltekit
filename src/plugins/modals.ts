import type { ShowModalOptions, View } from '@nativescript/core';
import { getContext, setContext } from 'svelte';

const MODAL_CONTEXT = Symbol('nativescript-sveltekit-modals');

export interface ModalPlugin {
  showModal: (view: View, options?: ShowModalOptions) => void;
  closeModal: (view: View, ...args: unknown[]) => void;
}

function createDefaultModals(): ModalPlugin {
  return {
    showModal(view: View, options?: ShowModalOptions) {
      view.showModal(view, options);
    },
    closeModal(view: View, ...args: unknown[]) {
      view.closeModal(...args);
    },
  };
}

export function installModals(plugin: ModalPlugin = createDefaultModals()): ModalPlugin {
  setContext(MODAL_CONTEXT, plugin);
  return plugin;
}

export function useModals(): ModalPlugin {
  return getContext<ModalPlugin>(MODAL_CONTEXT) ?? createDefaultModals();
}

export function $showModal(view: View, options?: ShowModalOptions): void {
  useModals().showModal(view, options);
}

export function $closeModal(view: View, ...args: unknown[]): void {
  useModals().closeModal(view, ...args);
}
