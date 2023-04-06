<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M12 6v15'></path>\n  <path d='M9 18l3 3l3 -3'></path>\n  <path d='M9 3l3 3l3 -3'></path>\n
</Icon>