<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M16 5l3 3l-2 1l4 4l-3 1l4 4h-9'></path>\n  <line x1='15' y1='21' x2='15' y2='18'></line>\n  <path d='M8 13l-2 -2'></path>\n  <path d='M8 12l2 -2'></path>\n  <path d='M8 21v-13'></path>\n  <path d='M5.824 15.995a3 3 0 0 1 -2.743 -3.69a2.998 2.998 0 0 1 .304 -4.833a3 3 0 0 1 4.615 -3.707a3 3 0 0 1 4.614 3.707a2.997 2.997 0 0 1 .305 4.833a3 3 0 0 1 -2.919 3.695h-4z'></path>\n
</Icon>