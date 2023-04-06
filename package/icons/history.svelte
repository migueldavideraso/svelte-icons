<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <polyline points='12 8 12 12 14 14'></polyline>\n  <path d='M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5'></path>\n
</Icon>