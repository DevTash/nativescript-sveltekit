<script lang="ts">
  let message = $state('Hello NativeScript-SvelteKit');
</script>

<Page>
  <ActionBar title="Starter" />
  <StackLayout>
    <Label text={message} />
  </StackLayout>
</Page>
