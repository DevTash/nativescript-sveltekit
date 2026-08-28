declare module '*.svelte' {
  import type { Component } from 'svelte';

  const value: Component;
  export default value;
}
