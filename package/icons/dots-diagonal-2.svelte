<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='7' cy='7' r='1'></circle>\n  <circle cx='12' cy='12' r='1'></circle>\n  <circle cx='17' cy='17' r='1'></circle>\n
</Icon>