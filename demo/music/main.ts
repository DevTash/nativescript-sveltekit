import App from './App.svelte';
import { createApp } from '../../src';

const NativeApp = Object.assign(App, {
  nsvRender: () => ({
    type: 'Page',
    children: [{ type: 'ActionBar', props: { title: 'SoundCloud' } }, { type: 'StackLayout', children: [{ type: 'Label', props: { text: 'Music app demo' } }] }],
  }),
});

const app = createApp(NativeApp);
app.mount();
app.start();
