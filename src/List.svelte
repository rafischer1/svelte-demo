<script>
  import { createEventDispatcher } from 'svelte';
  // input list
  const dispatch = createEventDispatcher();

  export let list = [];

  let selected = null;

  const handleClick = (index, item) => {
    selected = index;
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
      class:active={selected === index}
      on:click={() => handleClick(index, item)}
    >
      {index + 1}: {item}
    </li>
  {/each}
</ul>

{#if selected !== null}
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
