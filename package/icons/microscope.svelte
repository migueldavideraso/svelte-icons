<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M5 21h14'></path>\n  <path d='M6 18h2'></path>\n  <path d='M7 18v3'></path>\n  <path d='M9 11l3 3l6 -6l-3 -3z'></path>\n  <path d='M10.5 12.5l-1.5 1.5'></path>\n  <path d='M17 3l3 3'></path>\n  <path d='M12 21a6 6 0 0 0 3.715 -10.712'></path>\n
</Icon>