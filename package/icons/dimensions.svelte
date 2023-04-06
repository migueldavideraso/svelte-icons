<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M3 5h11'></path>\n  <path d='M12 7l2 -2l-2 -2'></path>\n  <path d='M5 3l-2 2l2 2'></path>\n  <path d='M19 10v11'></path>\n  <path d='M17 19l2 2l2 -2'></path>\n  <path d='M21 12l-2 -2l-2 2'></path>\n  <rect x='3' y='10' width='11' height='11' rx='2'></rect>\n
</Icon>