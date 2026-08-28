<script lang="ts">
  import type { Snippet } from 'svelte';

  let { children }: { children?: Snippet } = $props();
</script>

<svelte:element this="StackLayout">
  {@render children?.()}
</svelte:element>
