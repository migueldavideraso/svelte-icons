<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect x='2' y='3' width='20' height='12' rx='2'></rect>\n  <line x1='6' y1='7' x2='6' y2='7'></line>\n  <line x1='10' y1='7' x2='10' y2='7'></line>\n  <line x1='14' y1='7' x2='14' y2='7'></line>\n  <line x1='18' y1='7' x2='18' y2='7'></line>\n  <line x1='6' y1='11' x2='6' y2='11.01'></line>\n  <line x1='18' y1='11' x2='18' y2='11.01'></line>\n  <line x1='10' y1='11' x2='14' y2='11'></line>\n  <path d='M10 19l2 2l2 -2'></path>\n
</Icon>