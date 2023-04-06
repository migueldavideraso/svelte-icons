<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M4 18v-6a3 3 0 0 1 3 -3h7'></path>\n  <path d='M10 13l4 -4l-4 -4m5 8l4 -4l-4 -4'></path>\n
</Icon>