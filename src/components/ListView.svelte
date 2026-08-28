<script lang="ts">
  export let items: unknown[] = [];
  export let separatorColor = '';
  export let rowHeight: number | undefined = undefined;
  let props = $derived({ items, separatorColor, rowHeight });
</script>

<svelte:element this="ListView" {...props}>
  <slot />
</svelte:element>
