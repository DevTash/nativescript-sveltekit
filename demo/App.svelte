<script lang="ts">
  let count = $state(0);
  let doubled = $derived(count * 2);

  $effect(() => {
    console.log('count changed', count);
  });
</script>

<Page>
  <ActionBar title="NativeScript-SvelteKit Demo" />
  <StackLayout>
    <Label text={`Count: ${count}`} />
    <Label text={`Doubled: ${doubled}`} />
    <Button text="Increment" on:tap={() => count += 1} />
  </StackLayout>
</Page>
