<script>
  import { createEventDispatcher } from 'svelte';
  // input list
  const dispatch = createEventDispatcher('click', {
    onanimationend: true,
    onclick: () => console.log('Howdy there'),
  });

  export let list = [];

  let selected = null;

  const handleClick = (index, item) => {
    selected = index + 1;
    dispatch('title', {
      title: item.toUpperCase(),
    });
  };

  const reset = () => {
    selected = null;
    dispatch('title', {
      title: '[reset]',
    });
  };
</script>

<!-- html right here -->
<ul>
  {#each list as item, index}
    <li
      class:active={selected === index + 1}
      on:click={() => handleClick(index, item)}
    >
      {index + 1}: {item}
    </li>
  {/each}
</ul>

{#if selected}
  <button on:click={() => reset()} disabled={selected === null}>Reset</button>
{/if}

<!-- end html -->
<style>
  li {
    text-transform: capitalize;
    cursor: pointer;
  }

  .active {
    color: rgb(9, 72, 71);
  }

  button {
    cursor: pointer;
    margin: 5px 15px;
    border-radius: 10px;
    text-transform: uppercase;
    background-color: #333333;
    color: white;
  }
</style>
