import App from './App.svelte';
import { createApp } from '../src';

const NativeApp = Object.assign(App, {
  nsvRender: () => ({
    type: 'Page',
    children: [
      { type: 'ActionBar', props: { title: 'NativeScript Showcase' } },
      {
        type: 'StackLayout',
        props: { style: 'padding: 20' },
        children: [
          { type: 'Label', props: { text: 'REAL-WORLD MOCK APPS' } },
          { type: 'Label', props: { text: 'One toolkit. Any experience.' } },
          { type: 'Label', props: { text: '🏦  Banking  ·  🎵  Music  ·  🎬  Movies' } },
          { type: 'Label', props: { text: 'Explore the SvelteKit renderer with familiar product patterns.' } },
        ],
      },
    ],
  }),
});

const app = createApp(NativeApp);
app.mount();
app.start();
