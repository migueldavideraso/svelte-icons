<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect x='5' y='5' width='14' height='14' rx='1'></rect>\n  <path d='M9 9h6v6h-6z'></path>\n  <path d='M3 10h2'></path>\n  <path d='M3 14h2'></path>\n  <path d='M10 3v2'></path>\n  <path d='M14 3v2'></path>\n  <path d='M21 10h-2'></path>\n  <path d='M21 14h-2'></path>\n  <path d='M14 21v-2'></path>\n  <path d='M10 21v-2'></path>\n
</Icon>