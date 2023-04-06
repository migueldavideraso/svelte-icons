<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M16 13l4 4m0 -4l-4 4'></path>\n  <path d='M20 5h-7l-4 14l-3 -6h-2'></path>\n
</Icon>