<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <polyline points='12 4 4 8 12 12 20 8 12 4'></polyline>\n  <polyline points='4 12 12 16 20 12'></polyline>\n  <polyline points='4 16 12 20 20 16'></polyline>\n
</Icon>