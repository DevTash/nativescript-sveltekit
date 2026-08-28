<script lang="ts">
  import type { Snippet } from 'svelte';

  let { items = [] as unknown[], separatorColor = '', rowHeight = undefined as number | undefined, children }: { items?: unknown[]; separatorColor?: string; rowHeight?: number; children?: Snippet } = $props();
  let props = $derived({ items, separatorColor, rowHeight });
</script>

<svelte:element this="ListView" {...props}>
  {@render children?.()}
</svelte:element>
