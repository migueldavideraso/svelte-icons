<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M12 6l-8 4l8 4l8 -4l-8 -4'></path>\n  <path d='M4 14l8 4l8 -4'></path>\n
</Icon>