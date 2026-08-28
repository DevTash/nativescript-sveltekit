<script lang="ts">
  export let className = '';
  export let item: unknown = undefined;
  let props = $derived({ className, item });
</script>

<svelte:element this="StackLayout" {...props}>
  <slot />
</svelte:element>
