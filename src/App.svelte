<script>
  import AnotherComponent from './AnotherComponent.svelte';
  import List from './List.svelte';
  const things = ['hi', 'bye', 'ok', 'no way'];
  let title = 'Basic title';
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>
<main>
  <AnotherComponent me="Header" />
  <List list={things} on:title={(event) => (title = event.detail.title)} />
</main>

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
