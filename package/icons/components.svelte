<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M3 12l3 3l3 -3l-3 -3z'></path>\n  <path d='M15 12l3 3l3 -3l-3 -3z'></path>\n  <path d='M9 6l3 3l3 -3l-3 -3z'></path>\n  <path d='M9 18l3 3l3 -3l-3 -3z'></path>\n
</Icon>