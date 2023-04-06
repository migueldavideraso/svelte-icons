<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='12' cy='12' r='9'></circle>\n  <path d='M6 5.3a9 9 0 0 1 0 13.4'></path>\n  <path d='M18 5.3a9 9 0 0 0 0 13.4'></path>\n
</Icon>