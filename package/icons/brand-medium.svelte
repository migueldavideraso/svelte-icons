<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect x='4' y='4' width='16' height='16' rx='2'></rect>\n  <path d='M8 9h1l3 3l3 -3h1'></path>\n  <line x1='8' y1='15' x2='10' y2='15'></line>\n  <line x1='14' y1='15' x2='16' y2='15'></line>\n  <line x1='9' y1='9' x2='9' y2='15'></line>\n  <line x1='15' y1='9' x2='15' y2='15'></line>\n
</Icon>