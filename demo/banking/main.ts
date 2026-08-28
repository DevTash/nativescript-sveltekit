import App from './App.svelte';
import { createApp } from '../../src';

const NativeApp = Object.assign(App, {
  nsvRender: () => ({
    type: 'Page',
    children: [{ type: 'ActionBar', props: { title: 'Monzo' } }, { type: 'StackLayout', children: [{ type: 'Label', props: { text: 'Your money, made simple.' } }, { type: 'Label', props: { text: 'Available balance: $4,280.50' } }, { type: 'Button', props: { text: 'Send money' } }] }],
  }),
});

const app = createApp(NativeApp);
app.mount();
app.start();
