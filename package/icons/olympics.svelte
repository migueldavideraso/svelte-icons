<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='6' cy='9' r='3'></circle>\n  <circle cx='18' cy='9' r='3'></circle>\n  <circle cx='12' cy='9' r='3'></circle>\n  <circle cx='9' cy='15' r='3'></circle>\n  <circle cx='15' cy='15' r='3'></circle>\n
</Icon>