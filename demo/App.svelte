<script lang="ts">
  type AppName = 'banking' | 'music' | 'movies';

  let activeApp = $state<AppName>('banking');
  let balanceVisible = $state(true);
  let playing = $state(false);

  const transactions = [
    { merchant: 'Whole Foods', detail: 'Today · Card payment', amount: '-$48.20' },
    { merchant: 'Acme Inc.', detail: 'Yesterday · Income', amount: '+$2,450.00' },
    { merchant: 'Metro Coffee', detail: 'Yesterday · Card payment', amount: '-$5.80' },
  ];

  const songs = [
    { title: 'Midnight City', artist: 'M83', duration: '4:03' },
    { title: 'Sunset Lover', artist: 'Petit Biscuit', duration: '3:58' },
    { title: 'Electric Feel', artist: 'MGMT', duration: '3:49' },
  ];

  const movies = [
    { title: 'The Last Horizon', genre: 'Sci-fi · 2026', color: '#312e81' },
    { title: 'After the Rain', genre: 'Drama · 2025', color: '#0f766e' },
    { title: 'Northern Lights', genre: 'Documentary · 2024', color: '#9a3412' },
  ];
</script>

<Page>
  <ActionBar title="NativeScript Showcase" />
  <StackLayout style="background-color: #f8fafc; padding: 20;">
    <Label text="REAL-WORLD MOCK APPS" style="color: #64748b; font-size: 12; font-weight: bold;" />
    <Label text="One toolkit. Any experience." style="color: #0f172a; font-size: 26; font-weight: bold; margin: 6 0 18;" />

    <GridLayout columns="*,*,*" style="margin-bottom: 18;">
      <Button col="0" text="Banking" class={activeApp === 'banking' ? 'selected' : ''} on:tap={() => activeApp = 'banking'} />
      <Button col="1" text="Music" class={activeApp === 'music' ? 'selected' : ''} on:tap={() => activeApp = 'music'} />
      <Button col="2" text="Movies" class={activeApp === 'movies' ? 'selected' : ''} on:tap={() => activeApp = 'movies'} />
    </GridLayout>

    {#if activeApp === 'banking'}
      <StackLayout style="background-color: #172554; border-radius: 18; padding: 20; margin-bottom: 18;">
        <Label text="AVAILABLE BALANCE" style="color: #bfdbfe; font-size: 12;" />
        <Label text={balanceVisible ? '$4,280.50' : '••••••••'} style="color: white; font-size: 32; font-weight: bold; margin: 8 0 4;" />
        <Button text={balanceVisible ? 'Hide balance' : 'Show balance'} on:tap={() => balanceVisible = !balanceVisible} />
      </StackLayout>
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
    {:else if activeApp === 'music'}
      <StackLayout style="background-color: #7c3aed; border-radius: 18; padding: 20; margin-bottom: 18;">
        <Label text="YOUR MIX" style="color: #ede9fe; font-size: 12;" />
        <Label text="Late night drive" style="color: white; font-size: 28; font-weight: bold; margin: 8 0;" />
        <Label text="A hand-picked playlist for your next adventure." style="color: #ede9fe; font-size: 14; text-wrap: true;" />
        <Button text={playing ? '❚❚  Pause' : '▶  Play mix'} on:tap={() => playing = !playing} />
      </StackLayout>
      {#each songs as song, index}
        <GridLayout columns="auto,*,auto" style="background-color: white; border-radius: 12; padding: 14; margin-bottom: 8;">
          <Label col="0" text={String(index + 1).padStart(2, '0')} style="color: #8b5cf6; font-size: 16; margin-right: 14; vertical-align: center;" />
          <StackLayout col="1">
            <Label text={song.title} style="color: #0f172a; font-size: 16; font-weight: bold;" />
            <Label text={song.artist} style="color: #64748b; font-size: 12; margin-top: 4;" />
          </StackLayout>
          <Label col="2" text={song.duration} style="color: #64748b; font-size: 12; vertical-align: center;" />
        </GridLayout>
      {/each}
    {:else}
      <Label text="Continue watching" style="color: #0f172a; font-size: 20; font-weight: bold; margin-bottom: 10;" />
      {#each movies as movie}
        <GridLayout columns="110,*" style="background-color: white; border-radius: 12; margin-bottom: 10;">
          <StackLayout col="0" style={`background-color: ${movie.color}; height: 100; border-radius: 12 0 0 12;`}>
            <Label text="▶" style="color: white; font-size: 30; text-align: center; vertical-align: center;" />
          </StackLayout>
          <StackLayout col="1" style="padding: 14;">
            <Label text={movie.title} style="color: #0f172a; font-size: 16; font-weight: bold;" />
            <Label text={movie.genre} style="color: #64748b; font-size: 12; margin-top: 6;" />
            <Label text="Resume · 42 min left" style="color: #dc2626; font-size: 12; margin-top: 12;" />
          </StackLayout>
        </GridLayout>
      {/each}
    {/if}
  </StackLayout>
</Page>
