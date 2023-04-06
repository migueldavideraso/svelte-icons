<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='12' cy='7' r='4'></circle>\n  <circle cx='6.5' cy='17' r='4'></circle>\n  <circle cx='17.5' cy='17' r='4'></circle>\n
</Icon>