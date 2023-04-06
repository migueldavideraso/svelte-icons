<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='6' y1='9' x2='12' y2='9'></line>\n  <line x1='4' y1='5' x2='8' y2='5'></line>\n  <path d='M6 5v11a1 1 0 0 0 1 1h5'></path>\n  <rect x='12' y='7' width='8' height='4' rx='1'></rect>\n  <rect x='12' y='15' width='8' height='4' rx='1'></rect>\n
</Icon>