<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M5 6v12'></path>\n  <path d='M5 12c3.5 0 6 -3 6 -6'></path>\n  <path d='M5 12c3.5 0 6 3 6 6'></path>\n  <path d='M19 6l-2 2l-2 -2'></path>\n  <path d='M19 12h-2a3 3 0 0 0 0 6h2'></path>\n
</Icon>