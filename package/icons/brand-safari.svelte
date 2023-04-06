<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <polyline points='8 16 10 10 16 8 14 14 8 16'></polyline>\n  <circle cx='12' cy='12' r='9'></circle>\n
</Icon>