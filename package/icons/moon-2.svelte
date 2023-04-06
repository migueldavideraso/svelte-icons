<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M16.418 4.157a8 8 0 0 0 0 15.686'></path>\n  <circle cx='12' cy='12' r='9'></circle>\n
</Icon>