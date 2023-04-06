<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <polyline points='4 19 8 13 12 15 16 10 20 14 20 19 4 19'></polyline>\n  <polyline points='4 12 7 8 11 10 16 4 20 8'></polyline>\n
</Icon>