<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle transform='rotate(180 19 16)' cx='19' cy='16' r='2'></circle>\n  <path d='M21 12a2 2 0 1 0 -4 0v4'></path>\n  <path d='M4 6v12'></path>\n  <path d='M12 6v12'></path>\n  <path d='M11 18h2'></path>\n  <path d='M3 18h2'></path>\n  <path d='M4 12h8'></path>\n  <path d='M3 6h2'></path>\n  <path d='M11 6h2'></path>\n
</Icon>