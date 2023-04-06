<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M6 12h6'></path>\n  <path d='M9 6v12'></path>\n  <path d='M6 18h6a6 6 0 1 0 0 -12h-6'></path>\n
</Icon>