
<script>
  import { onMount } from 'svelte'
  import CommentTree from '$lib/CommentTree.svelte'
  import { formatDate, trimString, sanitize } from '$lib/utils.js'
  
  export let id = -1

  let expanded = false
  let comment
  $: text = !comment || !comment.text 
    ? "" 
    : comment.text.length > 300 && !expanded 
      ? trimString(comment.text.replace('<p>', '<p></p>'), 200) 
      : comment.text.replace('<p>', '<p></p>')

  onMount(async () => {
    const res = await fetch(`http://localhost:3000/api/${id}`)
    comment = await res.json()
  })
</script>

{#if comment && comment.text}
  <p class="title"> 
    {comment.by} - {formatDate(comment.time)} 
    {#if comment.text.length > 300 || comment.kids}
      - <button on:click={() => expanded = !expanded}> {expanded ? 'collapse' : 'expand'} </button>
    {/if}
  </p>

  <div class="indent">
    <p> {@html sanitize(text)} </p>

    {#if comment.kids?.length > 0 && expanded}
      <div class="spacer" />
      <CommentTree comments={comment.kids} />
    {/if}
  </div>
{:else}
  <p> ... loading </p>
{/if}