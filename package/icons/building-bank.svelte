<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='3' y1='21' x2='21' y2='21'></line>\n  <line x1='3' y1='10' x2='21' y2='10'></line>\n  <polyline points='5 6 12 3 19 6'></polyline>\n  <line x1='4' y1='10' x2='4' y2='21'></line>\n  <line x1='20' y1='10' x2='20' y2='21'></line>\n  <line x1='8' y1='14' x2='8' y2='17'></line>\n  <line x1='12' y1='14' x2='12' y2='17'></line>\n  <line x1='16' y1='14' x2='16' y2='17'></line>\n
</Icon>