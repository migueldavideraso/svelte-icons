<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='4' y1='12' x2='20' y2='12'></line>\n  <polyline points='8 8 12 4 16 8'></polyline>\n  <polyline points='16 16 12 20 8 16'></polyline>\n
</Icon>