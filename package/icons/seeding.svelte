<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M12 10a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3'></path>\n  <path d='M12 14a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3'></path>\n  <line x1='12' y1='20' x2='12' y2='10'></line>\n
</Icon>