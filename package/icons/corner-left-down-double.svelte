<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M18 4h-6a3 3 0 0 0 -3 3v7'></path>\n  <path d='M13 10l-4 4l-4 -4m8 5l-4 4l-4 -4'></path>\n
</Icon>