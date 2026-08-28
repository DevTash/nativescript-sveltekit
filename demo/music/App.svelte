<script lang="ts">
  let playing = $state(false);
  const songs = [
    { title: 'Neon Streets', artist: 'The Paper Satellites', duration: '4:03' },
    { title: 'Golden Hour', artist: 'Luma Fields', duration: '3:58' },
    { title: 'Static Hearts', artist: 'Velvet Circuit', duration: '3:49' },
  ];
</script>

<Page>
  <ActionBar title="EchoHarbor" />
  <StackLayout style="background-color: #fff7ed; padding: 20;">
    <Label text="YOUR MIX" style="color: #c2410c; font-size: 12; font-weight: bold;" />
    <Label text="Late night drive" style="color: #431407; font-size: 30; font-weight: bold; margin: 6 0;" />
    <Label text="A hand-picked playlist for your next adventure." style="color: #9a3412; font-size: 14; text-wrap: true; margin-bottom: 18;" />
    <Button text={playing ? '❚❚  Pause mix' : '▶  Play mix'} on:tap={() => playing = !playing} />
    <Label text="TRACKS FOR YOU" style="color: #c2410c; font-size: 12; font-weight: bold; margin: 24 0 10;" />
    {#each songs as song, index}
      <GridLayout columns="auto,*,auto" style="background-color: white; border-radius: 12; padding: 14; margin-bottom: 8;">
        <Label col="0" text={String(index + 1).padStart(2, '0')} style="color: #f97316; font-size: 16; margin-right: 14; vertical-align: center;" />
        <StackLayout col="1">
          <Label text={song.title} style="color: #431407; font-size: 16; font-weight: bold;" />
          <Label text={song.artist} style="color: #9a3412; font-size: 12; margin-top: 4;" />
        </StackLayout>
        <Label col="2" text={song.duration} style="color: #9a3412; font-size: 12; vertical-align: center;" />
      </GridLayout>
    {/each}
  </StackLayout>
</Page>
