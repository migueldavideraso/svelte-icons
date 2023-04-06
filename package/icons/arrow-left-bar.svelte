<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M21 12h-18'></path>\n  <path d='M6 9l-3 3l3 3'></path>\n  <path d='M21 9v6'></path>\n
</Icon>