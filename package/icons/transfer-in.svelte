<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M4 18v3h16v-14l-8 -4l-8 4v3'></path>\n  <path d='M4 14h9'></path>\n  <path d='M10 11l3 3l-3 3'></path>\n
</Icon>