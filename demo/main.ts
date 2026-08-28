import App from './App.svelte';
import { createApp } from '../src';

const NativeApp = Object.assign(App, {
  nsvRender: () => ({
    type: 'Page',
    children: [
      { type: 'ActionBar', props: { title: 'NativeScript-SvelteKit Demo' } },
      {
        type: 'StackLayout',
        children: [
          { type: 'Label', props: { text: 'Count: 0' } },
          { type: 'Label', props: { text: 'Doubled: 0' } },
          { type: 'Button', props: { text: 'Increment' } },
        ],
      },
    ],
  }),
});

const app = createApp(NativeApp);
app.mount();
app.start();
