<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M14 3l-11 11'></path>\n  <path d='M3 10v4h4'></path>\n  <path d='M17 10h4v4'></path>\n  <path d='M10 21l11 -11'></path>\n
</Icon>