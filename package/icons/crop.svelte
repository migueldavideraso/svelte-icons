<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M8 5v10a1 1 0 0 0 1 1h10'></path>\n  <path d='M5 8h10a1 1 0 0 1 1 1v10'></path>\n
</Icon>