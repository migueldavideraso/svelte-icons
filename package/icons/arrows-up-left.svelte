<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M21 7l-4 -4l-4 4'></path>\n  <path d='M17 3v11a3 3 0 0 1 -3 3h-11'></path>\n  <path d='M7 13l-4 4l4 4'></path>\n
</Icon>