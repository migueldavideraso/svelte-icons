<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='12' cy='10' r='2'></circle>\n  <path d='M10 14a2 2 0 1 0 4 0v-4'></path>\n  <circle cx='12' cy='12' r='9'></circle>\n
</Icon>