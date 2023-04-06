<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M19 5v6a3 3 0 0 1 -3 3h-7'></path>\n  <path d='M13 10l-4 4l4 4m-5 -8l-4 4l4 4'></path>\n
</Icon>