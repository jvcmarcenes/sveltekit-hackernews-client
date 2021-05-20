<script>
  import ThemeSelect from '$lib/ThemeSelect.svelte'
</script>

<svelte:head>
  <title>BRUTALIST FEED</title>
</svelte:head>

<div class="container">
  <p class="title"> BRUTALIST FEED </p>

  <ThemeSelect />
</div>
<div>
  <a href="/">top stories</a> |
  <a href="/newest">new stories</a>
</div>

<hr />

<slot />

<hr />

<p> made by <a href="https://github.com/jvcmarcenes">jvcmarcenes</a> </p>