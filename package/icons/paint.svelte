<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect x='5' y='3' width='14' height='6' rx='2'></rect>\n  <path d='M19 6h1a2 2 0 0 1 2 2a5 5 0 0 1 -5 5l-5 0v2'></path>\n  <rect x='10' y='15' width='4' height='6' rx='1'></rect>\n
</Icon>