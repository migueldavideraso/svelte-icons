<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M4 5h7'></path>\n  <path d='M7 4c0 4.846 0 7 .5 8'></path>\n  <path d='M10 8.5c0 2.286 -2 4.5 -3.5 4.5s-2.5 -1.135 -2.5 -2c0 -2 1 -3 3 -3s5 .57 5 2.857c0 1.524 -.667 2.571 -2 3.143'></path>\n  <path d='M12 20l4 -9l4 9'></path>\n  <path d='M19.1 18h-6.2'></path>\n
</Icon>