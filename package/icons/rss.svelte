<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='5' cy='19' r='1'></circle>\n  <path d='M4 4a16 16 0 0 1 16 16'></path>\n  <path d='M4 11a9 9 0 0 1 9 9'></path>\n
</Icon>