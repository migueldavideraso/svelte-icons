<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M6 18v-12h4a4 4 0 0 1 4 4v4'></path>\n  <path d='M18 6v12h-4a4 4 0 0 1 -4 -4v-4'></path>\n
</Icon>