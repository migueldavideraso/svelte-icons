<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M6 4l-3 3l3 3'></path>\n  <path d='M18 4l3 3l-3 3'></path>\n  <rect x='4' y='14' width='16' height='6' rx='2'></rect>\n  <path d='M10 7h-7'></path>\n  <path d='M21 7h-7'></path>\n
</Icon>