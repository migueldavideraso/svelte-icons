<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M15 21v-5c0 -1.38 .62 -2 2 -2s2 .62 2 2v5m0 -3h-4'></path>\n  <path d='M19 10h-4l4 -7h-4'></path>\n  <path d='M4 15l3 3l3 -3'></path>\n  <path d='M7 6v12'></path>\n
</Icon>