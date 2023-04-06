<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='12' y1='3' x2='12' y2='21'></line>\n  <polyline points='16 7 16 17 21 17 16 7'></polyline>\n  <polyline points='8 7 8 17 3 17 8 7'></polyline>\n
</Icon>