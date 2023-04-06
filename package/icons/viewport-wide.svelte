<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M10 12h-7l3 -3m0 6l-3 -3'></path>\n  <path d='M14 12h7l-3 -3m0 6l3 -3'></path>\n  <path d='M3 6v-3h18v3'></path>\n  <path d='M3 18v3h18v-3'></path>\n
</Icon>