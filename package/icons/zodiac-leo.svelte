<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M13 17a4 4 0 1 0 8 0'></path>\n  <circle cx='6' cy='16' r='3'></circle>\n  <circle cx='11' cy='7' r='4'></circle>\n  <path d='M7 7c0 3 2 5 2 9'></path>\n  <path d='M15 7c0 4 -2 6 -2 10'></path>\n
</Icon>