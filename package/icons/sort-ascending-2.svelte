<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M14 9l3 -3l3 3'></path>\n  <rect x='5' y='5' width='5' height='5' rx='.5'></rect>\n  <rect x='5' y='14' width='5' height='5' rx='.5'></rect>\n  <path d='M17 6v12'></path>\n
</Icon>