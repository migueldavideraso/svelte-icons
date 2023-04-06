<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='9' cy='9' r='9' transform='translate(3 3)'></circle>\n  <circle cx='12' cy='12' r='3'></circle>\n  <path d='M3 12h6m6 0h6'></path>\n
</Icon>