<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect x='4' y='13' rx='2' width='5' height='7'></rect>\n  <rect x='15' y='13' rx='2' width='5' height='7'></rect>\n  <path d='M4 15v-3a8 8 0 0 1 16 0v3'></path>\n
</Icon>