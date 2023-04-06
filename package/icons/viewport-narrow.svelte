<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M3 12h7l-3 -3m0 6l3 -3'></path>\n  <path d='M21 12h-7l3 -3m0 6l-3 -3'></path>\n  <path d='M9 6v-3h6v3'></path>\n  <path d='M9 18v3h6v-3'></path>\n
</Icon>