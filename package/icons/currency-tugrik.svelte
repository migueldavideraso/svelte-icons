<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M7 6h10'></path>\n  <path d='M12 6v13'></path>\n  <path d='M8 17l8 -3'></path>\n  <path d='M16 10l-8 3'></path>\n
</Icon>