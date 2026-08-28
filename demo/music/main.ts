import App from './App.svelte';
import { createApp } from '../../src';

const NativeApp = Object.assign(App, {
  nsvRender: () => ({
    type: 'Page',
    children: [{ type: 'ActionBar', props: { title: 'EchoHarbor' } }, { type: 'StackLayout', children: [{ type: 'Label', props: { text: 'Late night drive' } }, { type: 'Button', props: { text: 'Play mix' } }] }],
  }),
});

const app = createApp(NativeApp);
app.mount();
app.start();
