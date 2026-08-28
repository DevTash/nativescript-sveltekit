import App from './App.svelte';
import { createApp } from '../../src';

const NativeApp = Object.assign(App, {
  nsvRender: () => ({
    type: 'Page',
    children: [{ type: 'ActionBar', props: { title: 'Netflix' } }, { type: 'StackLayout', children: [{ type: 'Label', props: { text: 'Continue watching' } }, { type: 'Label', props: { text: 'The Last Horizon' } }, { type: 'Button', props: { text: 'Resume' } }] }],
  }),
});

const app = createApp(NativeApp);
app.mount();
app.start();
