<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <polyline points='5 9 9 9 9 5'></polyline>\n  <line x1='3' y1='3' x2='9' y2='9'></line>\n  <polyline points='5 15 9 15 9 19'></polyline>\n  <line x1='3' y1='21' x2='9' y2='15'></line>\n  <polyline points='19 9 15 9 15 5'></polyline>\n  <line x1='15' y1='9' x2='21' y2='3'></line>\n  <polyline points='19 15 15 15 15 19'></polyline>\n  <line x1='15' y1='15' x2='21' y2='21'></line>\n
</Icon>