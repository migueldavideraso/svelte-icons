<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect x='4' y='6' width='4' height='5' rx='1'></rect>\n  <line x1='6' y1='4' x2='6' y2='6'></line>\n  <line x1='6' y1='11' x2='6' y2='20'></line>\n  <rect x='10' y='14' width='4' height='5' rx='1'></rect>\n  <line x1='12' y1='4' x2='12' y2='14'></line>\n  <line x1='12' y1='19' x2='12' y2='20'></line>\n  <rect x='16' y='5' width='4' height='6' rx='1'></rect>\n  <line x1='18' y1='4' x2='18' y2='5'></line>\n  <line x1='18' y1='11' x2='18' y2='20'></line>\n
</Icon>