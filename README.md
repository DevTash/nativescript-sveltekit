# NativeScript-SvelteKit

NativeScript-SvelteKit is a Svelte 5 (runes-enabled) renderer/runtime for NativeScript inspired by the NativeScript-Vue architecture.

## What is included

- Custom renderer (`src/renderer`) with `nodeOps`, `patchProp`, and patch modules (`attrs`, `events`, `class`, `style`)
- DOM abstraction layer (`src/dom`) with `NSVNode`, `NSVElement`, `NSVText`, `NSVComment`, and `NSVRoot`
- Registry system (`src/registry`) with `registerElement`, `getViewClass`, and metadata/flags
- NativeScript integration (`src/nativescript`) with `init`, `startApp`, and `resetRoot`
- Plugins (`src/plugins`) for `$showModal`, `$closeModal`, `$navigateTo`, `$navigateBack`
- Built-in Svelte components (`src/components`) including `ActionBar`, `ListView`, `ListItem`, `Button`, `Label`, `StackLayout`
- NativeScript webpack chain extension in `nativescript-sveltekit.webpack.js` with `svelte-loader` and runes support
- Demo apps and starter template:
  - `demo/banking/` — banking app
  - `demo/music/` — music streaming app
  - `demo/movies/` — movie streaming app
  - `packages/template-blank/`

## Quick start

```bash
npm install
npm run typecheck
npm run build
```

## Example

```ts
import App from './App.svelte';
import { createApp } from 'nativescript-sveltekit';

const app = createApp(App);
app.mount();
app.start();
```

## NativeScript Preview

The demos use the NativeScript renderer and can be previewed on a physical
Android or iOS device with [NativeScript Preview](https://preview.nativescript.org/).
Install the Preview app, start the desired demo with the NativeScript CLI, and
scan the QR code shown by `ns preview`.
