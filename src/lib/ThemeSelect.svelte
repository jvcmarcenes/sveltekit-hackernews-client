<script>
  import { onMount } from 'svelte'
  import Select from '$lib/Select.svelte'

  let themes = ['light', 'dark', 'hacker']

  let updateTheme = () => _theme = theme

  let _theme
  let theme = "dark"
  $: theme, updateTheme()

  onMount(() => {
    updateTheme = () => {
      let app = document.querySelector('#svelte')
      app.classList.remove(_theme)
      app.classList.add(theme)
      _theme = theme
    }
  })

</script>

<Select options={themes} bind:value={theme} />
