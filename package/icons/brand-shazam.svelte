<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M10 12l2 -2a2.828 2.828 0 0 1 4 0a2.828 2.828 0 0 1 0 4l-3 3'></path>\n  <path d='M14 12l-2 2a2.828 2.828 0 1 1 -4 -4l3 -3'></path>\n  <circle cx='12' cy='12' r='9'></circle>\n
</Icon>