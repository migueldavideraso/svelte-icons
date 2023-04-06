<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <polyline points='3 7 9 13 13 9 21 17'></polyline>\n  <polyline points='21 10 21 17 14 17'></polyline>\n
</Icon>