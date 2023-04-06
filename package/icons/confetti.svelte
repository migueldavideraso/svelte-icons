<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M4 5h2'></path>\n  <path d='M5 4v2'></path>\n  <path d='M11.5 4l-.5 2'></path>\n  <path d='M18 5h2'></path>\n  <path d='M19 4v2'></path>\n  <path d='M15 9l-1 1'></path>\n  <path d='M18 13l2 -.5'></path>\n  <path d='M18 19h2'></path>\n  <path d='M19 18v2'></path>\n  <path d='M14 16.518l-6.518 -6.518l-4.39 9.58a1.003 1.003 0 0 0 1.329 1.329l9.579 -4.39z'></path>\n
</Icon>