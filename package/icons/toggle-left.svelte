<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='8' cy='12' r='2'></circle>\n  <rect x='2' y='6' width='20' height='12' rx='6'></rect>\n
</Icon>