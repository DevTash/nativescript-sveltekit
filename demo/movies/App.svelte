<script lang="ts">
  let selectedMovie = $state<string | null>(null);
  const movies = [
    { title: 'The Last Horizon', genre: 'Sci-fi · 2026', color: '#312e81' },
    { title: 'After the Rain', genre: 'Drama · 2025', color: '#0f766e' },
    { title: 'Northern Lights', genre: 'Documentary · 2024', color: '#9a3412' },
  ];
</script>

<Page>
  <ActionBar title="Netflix" />
  <StackLayout style="background-color: #111827; padding: 20;">
    <Label text="MY LIST" style="color: #f87171; font-size: 12; font-weight: bold;" />
    <Label text="Continue watching" style="color: white; font-size: 28; font-weight: bold; margin: 6 0 18;" />
    {#each movies as movie}
      <GridLayout columns="110,*" style="background-color: #1f2937; border-radius: 12; margin-bottom: 10;">
        <StackLayout col="0" style={`background-color: ${movie.color}; height: 100; border-radius: 12 0 0 12;`}>
          <Label text="▶" style="color: white; font-size: 30; text-align: center; vertical-align: center;" />
        </StackLayout>
        <StackLayout col="1" style="padding: 14;">
          <Label text={movie.title} style="color: white; font-size: 16; font-weight: bold;" />
          <Label text={movie.genre} style="color: #9ca3af; font-size: 12; margin-top: 6;" />
          <Button text={selectedMovie === movie.title ? 'Playing now' : 'Resume'} on:tap={() => selectedMovie = movie.title} />
        </StackLayout>
      </GridLayout>
    {/each}
  </StackLayout>
</Page>
