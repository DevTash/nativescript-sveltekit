<script lang="ts">
  let { text = '', isEnabled = true } = $props();
  let props = $derived({ text, isEnabled });
</script>

<svelte:element this="Button" {...props}>
  <slot />
</svelte:element>
