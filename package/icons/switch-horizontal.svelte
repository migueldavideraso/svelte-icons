<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <polyline points='16 3 20 7 16 11'></polyline>\n  <line x1='10' y1='7' x2='20' y2='7'></line>\n  <polyline points='8 13 4 17 8 21'></polyline>\n  <line x1='4' y1='17' x2='13' y2='17'></line>\n
</Icon>