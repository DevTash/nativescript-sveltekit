<script lang="ts">
  let { title = '' } = $props();
  let props = $derived({ title });
</script>

<svelte:element this="ActionBar" {...props}>
  <slot />
</svelte:element>
