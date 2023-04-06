<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect x='10' y='4' width='4' height='4' rx='1'></rect>\n  <rect x='3' y='17' width='4' height='4' rx='1'></rect>\n  <rect x='17' y='17' width='4' height='4' rx='1'></rect>\n  <line x1='6.5' y1='17.1' x2='11.5' y2='8'></line>\n  <line x1='17.5' y1='17.1' x2='12.5' y2='8'></line>\n  <line x1='7' y1='19' x2='17' y2='19'></line>\n
</Icon>