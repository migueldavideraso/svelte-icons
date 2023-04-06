<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M4 18v.01'></path>\n  <path d='M8 18v.01'></path>\n  <path d='M12 18v.01'></path>\n  <path d='M16 18v.01'></path>\n  <path d='M20 18v.01'></path>\n  <path d='M18 12h2'></path>\n  <path d='M11 12h2'></path>\n  <path d='M4 12h2'></path>\n  <path d='M4 6h16'></path>\n
</Icon>