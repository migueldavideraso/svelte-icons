<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect x='3' y='3' width='4' height='4' rx='1'></rect>\n  <rect x='17' y='3' width='4' height='4' rx='1'></rect>\n  <rect x='17' y='17' width='4' height='4' rx='1'></rect>\n  <rect x='3' y='17' width='4' height='4' rx='1'></rect>\n  <line x1='5' y1='7' x2='5' y2='17'></line>\n  <line x1='19' y1='7' x2='19' y2='17'></line>\n  <line x1='7' y1='5' x2='17' y2='5'></line>\n  <line x1='7' y1='19' x2='17' y2='19'></line>\n
</Icon>