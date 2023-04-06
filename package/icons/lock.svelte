<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect x='5' y='11' width='14' height='10' rx='2'></rect>\n  <circle cx='12' cy='16' r='1'></circle>\n  <path d='M8 11v-4a4 4 0 0 1 8 0v4'></path>\n
</Icon>