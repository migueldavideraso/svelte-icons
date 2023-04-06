<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect x='4' y='4' width='6' height='5' rx='2'></rect>\n  <rect x='4' y='13' width='6' height='7' rx='2'></rect>\n  <rect x='14' y='4' width='6' height='7' rx='2'></rect>\n  <rect x='14' y='15' width='6' height='5' rx='2'></rect>\n
</Icon>