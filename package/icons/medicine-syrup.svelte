<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M8 21h8a1 1 0 0 0 1 -1v-10a3 3 0 0 0 -3 -3h-4a3 3 0 0 0 -3 3v10a1 1 0 0 0 1 1z'></path>\n  <path d='M10 14h4'></path>\n  <path d='M12 12v4'></path>\n  <path d='M10 7v-3a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v3'></path>\n
</Icon>