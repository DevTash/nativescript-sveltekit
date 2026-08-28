import App from './App.svelte';
import { createApp } from '../../src';

const NativeApp = Object.assign(App, {
  nsvRender: () => ({
    type: 'Page',
    children: [{ type: 'ActionBar', props: { title: 'Netflix' } }, { type: 'StackLayout', children: [{ type: 'Label', props: { text: 'Movie app demo' } }] }],
  }),
});

createApp(NativeApp).start();
