<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect x='5' y='5' width='5' height='5' rx='.5'></rect>\n  <rect x='5' y='14' width='5' height='5' rx='.5'></rect>\n  <path d='M14 15l3 3l3 -3'></path>\n  <path d='M17 18v-12'></path>\n
</Icon>