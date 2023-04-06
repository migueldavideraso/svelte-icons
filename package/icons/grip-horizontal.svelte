<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='5' cy='9' r='1'></circle>\n  <circle cx='5' cy='15' r='1'></circle>\n  <circle cx='12' cy='9' r='1'></circle>\n  <circle cx='12' cy='15' r='1'></circle>\n  <circle cx='19' cy='9' r='1'></circle>\n  <circle cx='19' cy='15' r='1'></circle>\n
</Icon>