<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M3 12h1'></path>\n  <path d='M12 3v1'></path>\n  <path d='M20 12h1'></path>\n  <path d='M5.6 5.6l.7 .7'></path>\n  <path d='M18.4 5.6l-.7 .7'></path>\n  <path d='M8 12a4 4 0 1 1 8 0'></path>\n  <path d='M3 16h18'></path>\n  <path d='M3 20h18'></path>\n
</Icon>