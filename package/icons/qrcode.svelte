<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect x='4' y='4' width='6' height='6' rx='1'></rect>\n  <line x1='7' y1='17' x2='7' y2='17.01'></line>\n  <rect x='14' y='4' width='6' height='6' rx='1'></rect>\n  <line x1='7' y1='7' x2='7' y2='7.01'></line>\n  <rect x='4' y='14' width='6' height='6' rx='1'></rect>\n  <line x1='17' y1='7' x2='17' y2='7.01'></line>\n  <line x1='14' y1='14' x2='17' y2='14'></line>\n  <line x1='20' y1='14' x2='20' y2='14.01'></line>\n  <line x1='14' y1='14' x2='14' y2='17'></line>\n  <line x1='14' y1='20' x2='17' y2='20'></line>\n  <line x1='17' y1='17' x2='20' y2='17'></line>\n  <line x1='20' y1='17' x2='20' y2='20'></line>\n
</Icon>