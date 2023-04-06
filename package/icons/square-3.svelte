<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M12 12a2 2 0 1 0 -2 -2'></path>\n  <path d='M10 14a2 2 0 1 0 2 -2'></path>\n  <rect x='4' y='4' width='16' height='16' rx='2'></rect>\n
</Icon>