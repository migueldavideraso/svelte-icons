<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='4.5' cy='9.5' r='1'></circle>\n  <circle cx='9.5' cy='4.5' r='1'></circle>\n  <circle cx='9.5' cy='14.5' r='1'></circle>\n  <circle cx='4.5' cy='19.5' r='1'></circle>\n  <circle cx='14.5' cy='9.5' r='1'></circle>\n  <circle cx='19.5' cy='4.5' r='1'></circle>\n  <circle cx='14.5' cy='19.5' r='1'></circle>\n  <circle cx='19.5' cy='14.5' r='1'></circle>\n
</Icon>