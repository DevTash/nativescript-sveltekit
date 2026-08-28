<script lang="ts">
  let balanceVisible = $state(true);
  let transferSent = $state(false);

  const transactions = [
    { merchant: 'Whole Foods', detail: 'Today · Card payment', amount: '-$48.20' },
    { merchant: 'Acme Inc.', detail: 'Yesterday · Income', amount: '+$2,450.00' },
    { merchant: 'Metro Coffee', detail: 'Yesterday · Card payment', amount: '-$5.80' },
  ];
</script>

<Page>
  <ActionBar title="Monzo" />
  <StackLayout style="background-color: #f8fafc; padding: 20;">
    <Label text="GOOD MORNING, TASHA" style="color: #64748b; font-size: 12; font-weight: bold;" />
    <Label text="Your money, made simple." style="color: #0f172a; font-size: 26; font-weight: bold; margin: 6 0 18;" />
    <StackLayout style="background-color: #172554; border-radius: 18; padding: 20; margin-bottom: 18;">
      <Label text="AVAILABLE BALANCE" style="color: #bfdbfe; font-size: 12;" />
      <Label text={balanceVisible ? '$4,280.50' : '••••••••'} style="color: white; font-size: 32; font-weight: bold; margin: 8 0 4;" />
      <Button text={balanceVisible ? 'Hide balance' : 'Show balance'} on:tap={() => balanceVisible = !balanceVisible} />
    </StackLayout>
    <GridLayout columns="*,*" style="margin-bottom: 18;">
      <Button col="0" text={transferSent ? 'Send another transfer' : 'Send money'} on:tap={() => transferSent = !transferSent} />
      <Button col="1" text="Add money" />
    </GridLayout>
    <Label text="Recent activity" style="color: #0f172a; font-size: 20; font-weight: bold; margin-bottom: 8;" />
    {#each transactions as transaction}
      <GridLayout columns="*,auto" style="background-color: white; border-radius: 12; padding: 14; margin-bottom: 8;">
        <StackLayout col="0">
          <Label text={transaction.merchant} style="color: #0f172a; font-size: 16; font-weight: bold;" />
          <Label text={transaction.detail} style="color: #64748b; font-size: 12; margin-top: 4;" />
        </StackLayout>
        <Label col="1" text={transaction.amount} style="color: #0f172a; font-size: 15; vertical-align: center;" />
      </GridLayout>
    {/each}
  </StackLayout>
</Page>
