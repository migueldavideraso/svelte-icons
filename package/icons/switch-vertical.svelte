<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <polyline points='3 8 7 4 11 8'></polyline>\n  <line x1='7' y1='4' x2='7' y2='13'></line>\n  <polyline points='13 16 17 20 21 16'></polyline>\n  <line x1='17' y1='10' x2='17' y2='20'></line>\n
</Icon>