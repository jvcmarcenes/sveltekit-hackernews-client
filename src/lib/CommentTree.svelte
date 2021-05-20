
<script>
  import Comment from '$lib/Comment.svelte'

  export let comments = []
  let viewing = 10 < comments.length ? 10 : comments.length
</script>

{#each {length: viewing} as _, i}
  <Comment id={comments[i]} />
  {#if i < viewing - 1} <div class="spacer" /> {/if}
{/each}

{#if viewing < comments.length}
  <div class="spacer" />
  <button on:click={() => viewing += 10 > (comments.length - viewing) ? (comments.length - viewing) : 10}>load more</button>
{/if}