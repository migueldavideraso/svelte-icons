<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M4 15l3 3l3 -3'></path>\n  <path d='M7 6v12'></path>\n  <path d='M17 3a2 2 0 0 1 2 2v3a2 2 0 1 1 -4 0v-3a2 2 0 0 1 2 -2z'></path>\n  <circle cx='17' cy='16' r='2'></circle>\n  <path d='M19 16v3a2 2 0 0 1 -2 2h-1.5'></path>\n
</Icon>