<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M8 6h10a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-12'></path>\n  <circle cx='6' cy='18' r='2'></circle>\n  <path d='M8 18v-12a2 2 0 1 0 -4 0v12'></path>\n
</Icon>