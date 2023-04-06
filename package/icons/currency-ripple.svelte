<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='7' cy='12' r='3'></circle>\n  <circle cx='17' cy='7' r='3'></circle>\n  <circle cx='17' cy='17' r='3'></circle>\n  <path d='M10 12h3l2 -2.5'></path>\n  <path d='M15 14.5l-2 -2.5'></path>\n
</Icon>