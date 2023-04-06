<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect width='6' height='6' x='9' y='5' rx='1'></rect>\n  <line x1='4' y1='7' x2='5' y2='7'></line>\n  <line x1='4' y1='11' x2='5' y2='11'></line>\n  <line x1='19' y1='7' x2='20' y2='7'></line>\n  <line x1='19' y1='11' x2='20' y2='11'></line>\n  <line x1='4' y1='15' x2='20' y2='15'></line>\n  <line x1='4' y1='19' x2='20' y2='19'></line>\n
</Icon>