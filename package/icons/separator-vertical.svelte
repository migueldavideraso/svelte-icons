<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='12' y1='4' x2='12' y2='20'></line>\n  <polyline points='8 8 4 12 8 16'></polyline>\n  <polyline points='16 16 20 12 16 8'></polyline>\n
</Icon>