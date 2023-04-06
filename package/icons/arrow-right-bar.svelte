<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M18 15l3 -3l-3 -3'></path>\n  <path d='M3 12h18'></path>\n  <path d='M3 9v6'></path>\n
</Icon>