<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M5 6v12'></path>\n  <path d='M5 12c3.5 0 6 -3 6 -6'></path>\n  <path d='M5 12c3.5 0 6 3 6 6'></path>\n  <path d='M15 10v8'></path>\n  <path d='M19 10a4 4 0 0 0 -4 4'></path>\n  <path d='M20 18.01v-.01'></path>\n
</Icon>