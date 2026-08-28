<script lang="ts">
  import type { Snippet } from 'svelte';

  let { title = '', children }: { title?: string; children?: Snippet } = $props();
  let props = $derived({ title });
</script>

<svelte:element this="ActionBar" {...props}>
  {@render children?.()}
</svelte:element>
