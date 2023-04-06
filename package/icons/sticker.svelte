<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M20 12l-2 .5a6 6 0 0 1 -6.5 -6.5l.5 -2l8 8'></path>\n  <path d='M20 12a8 8 0 1 1 -8 -8'></path>\n
</Icon>