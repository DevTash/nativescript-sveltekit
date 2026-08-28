<script lang="ts">
  export let text = '';
  let props = $derived({ text });
</script>

<svelte:element this="Label" {...props}>
  <slot />
</svelte:element>
