<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M5 5h6.586a1 1 0 0 1 .707 1.707l-1.293 1.293'></path>\n  <path d='M8 8c0 1.5 .5 3 -2 5'></path>\n  <path d='M12 20l4 -9l4 9'></path>\n  <path d='M19.1 18h-6.2'></path>\n
</Icon>