<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='12' cy='10' r='2'></circle>\n  <circle cx='12' cy='14' r='2'></circle>\n  <rect x='4' y='4' width='16' height='16' rx='2'></rect>\n
</Icon>