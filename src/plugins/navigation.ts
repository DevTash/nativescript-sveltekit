import { Frame, type NavigationEntry } from '@nativescript/core';
import { getContext, setContext } from 'svelte';

const NAVIGATION_CONTEXT = Symbol('nativescript-sveltekit-navigation');

export interface NavigationPlugin {
  navigateTo: (entry: NavigationEntry) => void;
  navigateBack: () => void;
}

function createDefaultNavigation(): NavigationPlugin {
  return {
    navigateTo(entry: NavigationEntry) {
      Frame.topmost()?.navigate(entry);
    },
    navigateBack() {
      if (Frame.topmost()?.canGoBack()) {
        Frame.topmost()?.goBack();
      }
    },
  };
}

export function installNavigation(plugin: NavigationPlugin = createDefaultNavigation()): NavigationPlugin {
  setContext(NAVIGATION_CONTEXT, plugin);
  return plugin;
}

export function useNavigation(): NavigationPlugin {
  return getContext<NavigationPlugin>(NAVIGATION_CONTEXT) ?? createDefaultNavigation();
}

export function $navigateTo(entry: NavigationEntry): void {
  useNavigation().navigateTo(entry);
}

export function $navigateBack(): void {
  useNavigation().navigateBack();
}
