<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='9.5' cy='9.5' r='6.5'></circle>\n  <rect x='10' y='10' width='11' height='11' rx='2'></rect>\n
</Icon>