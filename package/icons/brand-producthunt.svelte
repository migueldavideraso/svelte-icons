<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M10 16v-8h2.5a2.5 2.5 0 1 1 0 5h-2.5'></path>\n  <circle cx='12' cy='12' r='9'></circle>\n
</Icon>