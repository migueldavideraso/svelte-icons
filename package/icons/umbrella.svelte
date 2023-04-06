<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M4 12a8 8 0 0 1 16 0z'></path>\n  <path d='M12 12v6a2 2 0 0 0 4 0'></path>\n
</Icon>