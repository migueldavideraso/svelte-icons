<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <polyline points='7 8 3 12 7 16'></polyline>\n  <polyline points='17 8 21 12 17 16'></polyline>\n  <line x1='3' y1='12' x2='21' y2='12'></line>\n
</Icon>