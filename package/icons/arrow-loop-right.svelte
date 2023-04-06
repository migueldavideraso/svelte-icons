<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M12 21v-13a4 4 0 1 0 -4 4h13'></path>\n  <path d='M18 15l3 -3l-3 -3'></path>\n
</Icon>