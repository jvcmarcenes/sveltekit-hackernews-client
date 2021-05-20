<script>
  import { formatDate } from '$lib/utils.js'

  export let id = -1

  const req = fetch(`http://localhost:3000/api/${id}`).then(async res => await res.json())
</script>

{#await req}
  <p> loading... </p>
{:then post}
  <p> {post.by} - {formatDate(post.time)} </p>
  <div class="indent"> 
    <a href={`/${post.id}`}> {post.title} </a> 
    {#if post.kids} <p> - {post.kids.length} comments </p> {/if}
  </div>
{:catch err}
  <p> {err} </p>
{/await}
