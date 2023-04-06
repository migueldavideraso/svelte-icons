<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='17' cy='6' r='2'></circle>\n  <path d='M9 11a5 5 0 1 0 3.95 7.95'></path>\n  <path d='M19 20l-4 -5h-4l3 -5l-4 -3l-4 1'></path>\n
</Icon>