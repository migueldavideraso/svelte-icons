<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='16.5' cy='15.5' r='1'></circle>\n  <path d='M7 7a2 2 0 1 1 4 0v9a3 3 0 0 0 6 0v-.5'></path>\n  <path d='M8 11h6'></path>\n
</Icon>