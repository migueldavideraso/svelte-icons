<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M12 3l9.5 7l-3.5 11h-12l-3.5 -11z'></path>\n  <path d='M12 7.5l5.5 4l-2.5 5.5h-6.5l-2 -5.5z'></path>\n  <path d='M2.5 10l9.5 3l9.5 -3'></path>\n  <path d='M12 3v10l6 8'></path>\n  <path d='M6 21l6 -8'></path>\n
</Icon>