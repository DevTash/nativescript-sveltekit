<script lang="ts">
  export let text = '';
  export let isEnabled = true;
  let props = $derived({ text, isEnabled });
</script>

<svelte:element this="Button" {...props}>
  <slot />
</svelte:element>
