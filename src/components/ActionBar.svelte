<script lang="ts">
  export let title = '';
  let props = $derived({ title });
</script>

<svelte:element this="ActionBar" {...props}>
  <slot />
</svelte:element>
