<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M17 18h2a2 2 0 1 0 0 -4h-2v-4h4'></path>\n  <path d='M4 6v12'></path>\n  <path d='M12 6v12'></path>\n  <path d='M11 18h2'></path>\n  <path d='M3 18h2'></path>\n  <path d='M4 12h8'></path>\n  <path d='M3 6h2'></path>\n  <path d='M11 6h2'></path>\n
</Icon>