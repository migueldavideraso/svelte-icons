<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M10 5v15a7 7 0 0 0 7 -7'></path>\n  <path d='M6 15l8 -4'></path>\n  <path d='M14 7l-8 4'></path>\n
</Icon>