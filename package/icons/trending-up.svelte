<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <polyline points='3 17 9 11 13 15 21 7'></polyline>\n  <polyline points='14 7 21 7 21 14'></polyline>\n
</Icon>