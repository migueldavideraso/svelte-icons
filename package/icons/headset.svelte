<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect x='4' y='13' rx='2' width='4' height='6'></rect>\n  <rect x='16' y='13' rx='2' width='4' height='6'></rect>\n  <path d='M4 15v-3a8 8 0 0 1 16 0v3'></path>\n  <path d='M18 19a6 3 0 0 1 -6 3'></path>\n
</Icon>