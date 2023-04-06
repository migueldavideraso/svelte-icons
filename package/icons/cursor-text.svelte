<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M10 12h4'></path>\n  <path d='M9 4a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3'></path>\n  <path d='M15 4a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3'></path>\n
</Icon>