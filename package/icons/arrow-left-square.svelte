<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M17 12h-14'></path>\n  <path d='M6 9l-3 3l3 3'></path>\n  <path d='M21 14h-4v-4h4z'></path>\n
</Icon>