<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M12 3a3 3 0 0 0 -3 3v12a3 3 0 0 0 3 3'></path>\n  <path d='M6 3a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3'></path>\n  <path d='M13 7h7a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-7'></path>\n  <path d='M5 7h-1a1 1 0 0 0 -1 1v8a1 1 0 0 0 1 1h1'></path>\n  <path d='M17 12h.01'></path>\n  <path d='M13 12h.01'></path>\n
</Icon>