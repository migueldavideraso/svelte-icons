<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect x='4' y='4' width='10' height='16' rx='1'></rect>\n  <line x1='8' y1='5' x2='10' y2='5'></line>\n  <line x1='9' y1='17' x2='9' y2='17.01'></line>\n  <path d='M20 6l-2 3l2 3l-2 3l2 3'></path>\n
</Icon>