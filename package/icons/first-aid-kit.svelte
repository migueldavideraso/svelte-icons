<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M8 8v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2'></path>\n  <rect x='4' y='8' width='16' height='12' rx='2'></rect>\n  <path d='M10 14h4'></path>\n  <path d='M12 12v4'></path>\n
</Icon>