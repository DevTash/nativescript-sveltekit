<script lang="ts">
  let { items = [] as unknown[], separatorColor = '', rowHeight = undefined as number | undefined } = $props();
  let props = $derived({ items, separatorColor, rowHeight });
</script>

<svelte:element this="ListView" {...props}>
  <slot />
</svelte:element>
