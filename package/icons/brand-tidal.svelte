<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M12 7l-2.5 2.5l2.5 2.5l2.5 -2.5z'></path>\n  <path d='M12 14l-2.5 2.5l2.5 2.5l2.5 -2.5z'></path>\n  <path d='M19 7l-2.5 2.5l2.5 2.5l2.5 -2.5z'></path>\n  <path d='M5 7l-2.5 2.5l2.5 2.5l2.5 -2.5z'></path>\n
</Icon>