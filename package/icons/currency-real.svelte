<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M21 6h-4a3 3 0 0 0 0 6h1a3 3 0 0 1 0 6h-4'></path>\n  <path d='M4 18v-12h3a3 3 0 1 1 0 6h-3c5.5 0 5 4 6 6'></path>\n  <path d='M18 6v-2'></path>\n  <path d='M17 20v-2'></path>\n
</Icon>