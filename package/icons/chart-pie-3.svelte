<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M12 12l-6.5 5.5'></path>\n  <path d='M12 3v9h9'></path>\n  <circle cx='12' cy='12' r='9'></circle>\n
</Icon>