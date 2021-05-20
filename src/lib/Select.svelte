
<script>
  export let options = []
  export let value = options[0]

  let menuShown = false;
</script>

<svelte:window on:click={() => menuShown = menuShown = false} />

{#if menuShown}
  <div>
    {#each options as option}
      <button on:click={() => {value = option; menuShown = false}}>{option}</button>
    {/each}
  </div>
{:else}
  <button on:click|stopPropagation={() => menuShown = !menuShown}>{value}</button>
{/if}
