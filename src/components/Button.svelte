<script lang="ts">
  import type { Snippet } from 'svelte';

  let { text = '', isEnabled = true, children }: { text?: string; isEnabled?: boolean; children?: Snippet } = $props();
  let props = $derived({ text, isEnabled });
</script>

<svelte:element this="Button" {...props}>
  {@render children?.()}
</svelte:element>
