<script lang="ts">
  import type { Snippet } from 'svelte';

  let { text = '', children }: { text?: string; children?: Snippet } = $props();
  let props = $derived({ text });
</script>

<svelte:element this="Label" {...props}>
  {@render children?.()}
</svelte:element>
