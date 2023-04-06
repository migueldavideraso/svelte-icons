<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M4 4a3 3 0 0 1 3 3v9'></path>\n  <path d='M7 7a3 3 0 0 1 6 0v11a3 3 0 0 1 -3 3'></path>\n  <circle cx='16' cy='17' r='3'></circle>\n
</Icon>