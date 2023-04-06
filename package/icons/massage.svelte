<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='4' cy='17' r='1'></circle>\n  <circle cx='9' cy='5' r='1'></circle>\n  <path d='M4 22l4 -2v-3h12'></path>\n  <path d='M11 20h9'></path>\n  <path d='M8 14l3 -2l1 -4c3 1 3 4 3 6'></path>\n
</Icon>