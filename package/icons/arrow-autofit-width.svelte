<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M4 12v-6a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6'></path>\n  <path d='M10 18h-7'></path>\n  <path d='M21 18h-7'></path>\n  <path d='M6 15l-3 3l3 3'></path>\n  <path d='M18 15l3 3l-3 3'></path>\n
</Icon>