<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <polyline points='8 7 12 3 16 7'></polyline>\n  <polyline points='8 17 12 21 16 17'></polyline>\n  <line x1='12' y1='3' x2='12' y2='21'></line>\n
</Icon>