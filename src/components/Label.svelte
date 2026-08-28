<script lang="ts">
  let { text = '' } = $props();
  let props = $derived({ text });
</script>

<svelte:element this="Label" {...props}>
  <slot />
</svelte:element>
