<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M17 21l4 -4l-4 -4'></path>\n  <path d='M21 17h-11a3 3 0 0 1 -3 -3v-11'></path>\n  <path d='M11 7l-4 -4l-4 4'></path>\n
</Icon>