<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M4 19v2h16v-14l-8 -4l-8 4v2'></path>\n  <path d='M13 14h-9'></path>\n  <path d='M7 11l-3 3l3 3'></path>\n
</Icon>