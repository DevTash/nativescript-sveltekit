<script lang="ts">
  type AppName = 'banking' | 'music' | 'movies';
  let activeApp = $state<AppName>('banking');
  let balanceVisible = $state(true);
  let playing = $state(false);
  let transferSent = $state(false);
  let selectedMovie = $state<string | null>(null);

  const transactions = [
    ['Green Basket', 'Today · Card payment', '-$48.20'],
    ['Northstar Labs', 'Yesterday · Income', '+$2,450.00'],
    ['Corner Cup', 'Yesterday · Card payment', '-$5.80'],
  ];
  const songs = [
    ['Neon Streets', 'The Paper Satellites', '4:03'],
    ['Golden Hour', 'Luma Fields', '3:58'],
    ['Static Hearts', 'Velvet Circuit', '3:49'],
  ];
  const movies = [
    ['The Last Horizon', 'Sci-fi · 2026', '#312e81'],
    ['After the Rain', 'Drama · 2025', '#0f766e'],
    ['Northern Lights', 'Documentary · 2024', '#9a3412'],
  ];
</script>

<svelte:head>
  <title>NativeScript Showcase</title>
  <meta name="description" content="NativeScript Showcase browser preview with three fictional mock apps" />
</svelte:head>

<main>
  <header>
    <p class="eyebrow">REAL-WORLD MOCK APPS</p>
    <h1>One toolkit. Any experience.</h1>
    <p class="subtitle">Explore the same product ideas in a browser preview.</p>
  </header>

  <nav aria-label="Choose a mock app">
    <button class:active={activeApp === 'banking'} onclick={() => activeApp = 'banking'}>Pocketly</button>
    <button class:active={activeApp === 'music'} onclick={() => activeApp = 'music'}>EchoHarbor</button>
    <button class:active={activeApp === 'movies'} onclick={() => activeApp = 'movies'}>FlickNest</button>
  </nav>

  {#if activeApp === 'banking'}
    <section class="banking">
      <p class="eyebrow">GOOD MORNING</p>
      <h2>Your money, made simple.</h2>
      <div class="balance">
        <span>AVAILABLE BALANCE</span>
        <strong>{balanceVisible ? '$4,280.50' : '••••••••'}</strong>
        <button onclick={() => balanceVisible = !balanceVisible}>{balanceVisible ? 'Hide balance' : 'Show balance'}</button>
      </div>
      <div class="actions"><button onclick={() => transferSent = true}>Send money</button><button>Add money</button></div>
      {#if transferSent}<p class="confirmation">Transfer sent successfully.</p>{/if}
      <h3>Recent activity</h3>
      {#each transactions as transaction}
        <article class="row"><div><strong>{transaction[0]}</strong><small>{transaction[1]}</small></div><b>{transaction[2]}</b></article>
      {/each}
    </section>
  {:else if activeApp === 'music'}
    <section class="music">
      <p class="eyebrow">YOUR MIX</p>
      <h2>Late night drive</h2>
      <p>A hand-picked playlist for your next adventure.</p>
      <button class="play" onclick={() => playing = !playing}>{playing ? '❚❚  Pause mix' : '▶  Play mix'}</button>
      <h3>TRACKS FOR YOU</h3>
      {#each songs as song, index}
        <article class="row"><div><em>{String(index + 1).padStart(2, '0')}</em><span><strong>{song[0]}</strong><small>{song[1]}</small></span></div><b>{song[2]}</b></article>
      {/each}
    </section>
  {:else}
    <section class="movies">
      <p class="eyebrow">MY LIST</p>
      <h2>Continue watching</h2>
      {#each movies as movie}
        <article class:selected={selectedMovie === movie[0]} class="movie">
          <div class="poster" style:background={movie[2]}>▶</div>
          <div><strong>{movie[0]}</strong><small>{movie[1]}</small><button onclick={() => selectedMovie = movie[0]}>{selectedMovie === movie[0] ? 'Playing now' : 'Resume'}</button></div>
        </article>
      {/each}
    </section>
  {/if}
</main>
