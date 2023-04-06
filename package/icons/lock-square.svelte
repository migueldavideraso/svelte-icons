<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect x='8' y='11' width='8' height='5' rx='1'></rect>\n  <path d='M10 11v-2a2 2 0 1 1 4 0v2'></path>\n  <rect x='4' y='4' width='16' height='16' rx='2'></rect>\n
</Icon>