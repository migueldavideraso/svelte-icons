<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='5' cy='5' r='2'></circle>\n  <circle cx='19' cy='19' r='2'></circle>\n  <circle cx='19' cy='5' r='2'></circle>\n  <circle cx='5' cy='19' r='2'></circle>\n  <path d='M7 5h10m-12 2v10m14 -10v10'></path>\n
</Icon>