<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='10' cy='10' r='7'></circle>\n  <path d='M21 21l-6 -6'></path>\n  <path d='M7 10l2 2l4 -4'></path>\n
</Icon>