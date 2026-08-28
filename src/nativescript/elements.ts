import {
  ActionBar,
  Button,
  ContentView,
  Frame,
  GridLayout,
  Label,
  ListView,
  Page,
  StackLayout,
} from '@nativescript/core';
import { registerElement, ViewFlags } from '../registry';

let initialized = false;

export function registerNativeScriptElements(): void {
  if (initialized) {
    return;
  }

  registerElement('Page', () => Page, { flags: ViewFlags.CONTENT_VIEW | ViewFlags.NAVIGATION });
  registerElement('Frame', () => Frame, { flags: ViewFlags.CONTENT_VIEW | ViewFlags.NAVIGATION });
  registerElement('ActionBar', () => ActionBar, { flags: ViewFlags.NAVIGATION });
  registerElement('StackLayout', () => StackLayout, { flags: ViewFlags.LAYOUT });
  registerElement('GridLayout', () => GridLayout, { flags: ViewFlags.LAYOUT });
  registerElement('ContentView', () => ContentView, { flags: ViewFlags.CONTENT_VIEW });
  registerElement('Button', () => Button, { flags: ViewFlags.TEXT_BASED, model: 'text' });
  registerElement('Label', () => Label, { flags: ViewFlags.TEXT_BASED, model: 'text' });
  registerElement('ListView', () => ListView, { flags: ViewFlags.LAYOUT });

  initialized = true;
}
