<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M3 19h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4'></path>\n  <path d='M12.5 5.5l4 4'></path>\n  <path d='M4.5 13.5l4 4'></path>\n  <path d='M21 15v4h-8l4 -4z'></path>\n
</Icon>