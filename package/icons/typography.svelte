<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='4' y1='20' x2='7' y2='20'></line>\n  <line x1='14' y1='20' x2='21' y2='20'></line>\n  <line x1='6.9' y1='15' x2='13.8' y2='15'></line>\n  <line x1='10.2' y1='6.3' x2='16' y2='20'></line>\n  <polyline points='5 20 11 4 13 4 20 20'></polyline>\n
</Icon>