<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M5 19h6a3 3 0 0 0 3 -3v-7'></path>\n  <path d='M10 13l4 -4l4 4m-8 -5l4 -4l4 4'></path>\n
</Icon>