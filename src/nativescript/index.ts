import { Application, type View } from '@nativescript/core';
import type { NSVElement, NSVRoot } from '../dom';
import { registerNativeScriptElements } from './elements';

export interface NativeScriptInitOptions {
  registerCoreElements?: boolean;
}

let hasInitialized = false;
let rootRef: NSVRoot | NSVElement | null = null;

export function init(options: NativeScriptInitOptions = {}): void {
  if (hasInitialized) {
    return;
  }

  if (options.registerCoreElements !== false) {
    registerNativeScriptElements();
  }

  hasInitialized = true;
}

export function startApp(rootFactory: () => NSVRoot | NSVElement): void {
  init();
  Application.run({
    create() {
      rootRef = rootFactory();
      return rootRef.nativeView as unknown as View;
    },
  });
}

export function resetRoot(nextRoot: NSVRoot | NSVElement): void {
  rootRef = nextRoot;
}

export function getRoot(): NSVRoot | NSVElement | null {
  return rootRef;
}
