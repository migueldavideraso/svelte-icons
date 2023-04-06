<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M18 15l3 -3l-3 -3'></path>\n  <circle cx='5' cy='12' r='2'></circle>\n  <path d='M7 12h14'></path>\n
</Icon>