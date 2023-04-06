<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <polyline points='16 4 20 4 20 8'></polyline>\n  <line x1='14' y1='10' x2='20' y2='4'></line>\n  <polyline points='8 20 4 20 4 16'></polyline>\n  <line x1='4' y1='20' x2='10' y2='14'></line>\n  <polyline points='16 20 20 20 20 16'></polyline>\n  <line x1='14' y1='14' x2='20' y2='20'></line>\n  <polyline points='8 4 4 4 4 8'></polyline>\n  <line x1='4' y1='4' x2='10' y2='10'></line>\n
</Icon>