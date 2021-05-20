
<script context="module">
  export async function load({ fetch }) {
    const res = await fetch('https://hacker-news.firebaseio.com/v0/newstories.json')
    const posts = await res.json()

    return {
      props: {
        posts
      }
    }
  }
</script>

<script>
  import Post from '$lib/Post.svelte'

  export let posts = []
  let viewing = 15
</script>

{#each {length: viewing} as _, i}
  <Post id={posts[i]} />
  <div class="spacer" />
{/each}
{#if viewing < posts.length} <button on:click={() => viewing = viewing + 10}>load more</button> {/if}