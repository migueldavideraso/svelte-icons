<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M5 7l8 10m-8 0l8 -10'></path>\n  <path d='M21 20h-4l3.5 -4a1.73 1.73 0 0 0 -3.5 -2'></path>\n
</Icon>