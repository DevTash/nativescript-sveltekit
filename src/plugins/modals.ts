import type { ShowModalOptions, View } from '@nativescript/core';
import { getContext, setContext } from 'svelte';

const MODAL_CONTEXT = Symbol('nativescript-sveltekit-modals');

export interface ModalPlugin {
  showModal: (host: View, modal: View, options?: ShowModalOptions) => void;
  closeModal: (modal: View, ...args: unknown[]) => void;
}

function createDefaultModals(): ModalPlugin {
  return {
    showModal(host: View, modal: View, options?: ShowModalOptions) {
      host.showModal(modal, options);
    },
    closeModal(modal: View, ...args: unknown[]) {
      modal.closeModal(...args);
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

export function $showModal(host: View, modal: View, options?: ShowModalOptions): void {
  useModals().showModal(host, modal, options);
}

export function $closeModal(modal: View, ...args: unknown[]): void {
  useModals().closeModal(modal, ...args);
}
