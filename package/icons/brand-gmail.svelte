<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M16 20h3a1 1 0 0 0 1 -1v-14a1 1 0 0 0 -1 -1h-3v16z'></path>\n  <path d='M5 20h3v-16h-3a1 1 0 0 0 -1 1v14a1 1 0 0 0 1 1z'></path>\n  <path d='M16 4l-4 4l-4 -4'></path>\n  <path d='M4 6.5l8 7.5l8 -7.5'></path>\n
</Icon>