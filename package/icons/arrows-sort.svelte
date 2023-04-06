<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M3 9l4 -4l4 4m-4 -4v14'></path>\n  <path d='M21 15l-4 4l-4 -4m4 4v-14'></path>\n
</Icon>