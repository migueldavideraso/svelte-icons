<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M17 3l4 4'></path>\n  <path d='M19 5l-4.5 4.5'></path>\n  <path d='M11.5 6.5l6 6'></path>\n  <path d='M16.5 11.5l-6.5 6.5h-4v-4l6.5 -6.5'></path>\n  <path d='M7.5 12.5l1.5 1.5'></path>\n  <path d='M10.5 9.5l1.5 1.5'></path>\n  <path d='M3 21l3 -3'></path>\n
</Icon>