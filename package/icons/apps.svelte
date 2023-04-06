<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect x='4' y='4' width='6' height='6' rx='1'></rect>\n  <rect x='4' y='14' width='6' height='6' rx='1'></rect>\n  <rect x='14' y='14' width='6' height='6' rx='1'></rect>\n  <line x1='14' y1='7' x2='20' y2='7'></line>\n  <line x1='17' y1='4' x2='17' y2='10'></line>\n
</Icon>