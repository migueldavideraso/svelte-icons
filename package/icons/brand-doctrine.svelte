<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='12' cy='14' r='7'></circle>\n  <path d='M9 14h6'></path>\n  <path d='M12 11l3 3l-3 3'></path>\n  <path d='M10 3l6.9 6'></path>\n
</Icon>