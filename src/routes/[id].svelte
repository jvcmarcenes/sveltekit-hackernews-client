
<script context="module">
  export async function load({ page, fetch }) {
    const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${page.params.id}.json`)
    const post = await res.json()

    return {
      props: {
        post
      }
    }
  }
</script>

<script>
  import CommentTree from '$lib/CommentTree.svelte'
  import { formatDate, sanitize } from '$lib/utils.js'

  export let post
</script>

<svelte:head>
  <title> {post.title} - BRUTALIST FEED </title>
</svelte:head>

<p> &larr; <a href="/"> go back </a> </p>
<div class="spacer" />

<p class="title"> {post.title} </p>
<p> - by {post.by} - {formatDate(post.time)} </p>
<div class="spacer" />

{#if post.url}
  <a target="_blank" href={post.url}> {post.url} </a>
{:else}
  <p> {@html sanitize(post.text)} </p>
{/if}

{#if post.kids}
  <div class="spacer" />

  <hr />
  <CommentTree comments={post.kids} />
{/if}

