<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect x='4' y='4' width='6' height='6' rx='1'></rect>\n  <rect x='14' y='4' width='6' height='6' rx='1'></rect>\n  <rect x='4' y='14' width='6' height='6' rx='1'></rect>\n  <path d='M14 17h6m-3 -3v6'></path>\n
</Icon>