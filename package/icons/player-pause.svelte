<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect x='6' y='5' width='4' height='14' rx='1'></rect>\n  <rect x='14' y='5' width='4' height='14' rx='1'></rect>\n
</Icon>