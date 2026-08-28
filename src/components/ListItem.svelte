<script lang="ts">
  import type { Snippet } from 'svelte';

  let { className = '', item = undefined as unknown, children }: { className?: string; item?: unknown; children?: Snippet } = $props();
  let props = $derived({ className, item });
</script>

<svelte:element this="StackLayout" {...props}>
  {@render children?.()}
</svelte:element>
