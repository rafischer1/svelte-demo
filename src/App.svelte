<script>
  import List from './List.svelte';
  import { Router, Route, Link } from 'svelte-navigator';
  import About from './About.svelte';

  const things = ['hi', 'bye', 'ok', 'no way'];
  let title = 'Basic title';
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<Router>
  <header>
    <h1>Do something</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="about">About</Link>
    </nav>
  </header>
  <main>
    <Route path="">
      <List list={things} on:title={(event) => (title = event.detail.title)} />
    </Route>
    <Route path="about">
      <About />
    </Route>
  </main>
</Router>

<style>
  main {
    background-color: slategray;
    height: 100%;
    color: white;
    font-size: 1.5em;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
</style>
