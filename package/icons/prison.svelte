<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M18 4v16'></path>\n  <path d='M14 4v16'></path>\n  <path d='M6 4v5'></path>\n  <path d='M6 15v5'></path>\n  <path d='M10 4v5'></path>\n  <path d='M11 9h-6v6h6z'></path>\n  <path d='M10 15v5'></path>\n  <path d='M8 12h-.01'></path>\n
</Icon>