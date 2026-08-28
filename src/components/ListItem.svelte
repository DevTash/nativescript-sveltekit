<script lang="ts">
  let { className = '', item = undefined as unknown } = $props();
  let props = $derived({ className, item });
</script>

<svelte:element this="StackLayout" {...props}>
  <slot />
</svelte:element>
