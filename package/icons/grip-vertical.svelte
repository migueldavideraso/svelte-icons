<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='9' cy='5' r='1'></circle>\n  <circle cx='9' cy='12' r='1'></circle>\n  <circle cx='9' cy='19' r='1'></circle>\n  <circle cx='15' cy='5' r='1'></circle>\n  <circle cx='15' cy='12' r='1'></circle>\n  <circle cx='15' cy='19' r='1'></circle>\n
</Icon>