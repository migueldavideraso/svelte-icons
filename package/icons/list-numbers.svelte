<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M11 6h9'></path>\n  <path d='M11 12h9'></path>\n  <path d='M12 18h8'></path>\n  <path d='M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4'></path>\n  <path d='M6 10v-6l-2 2'></path>\n
</Icon>