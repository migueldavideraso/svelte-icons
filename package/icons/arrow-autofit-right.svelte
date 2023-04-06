<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M20 12v-6a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v8'></path>\n  <path d='M4 18h17'></path>\n  <path d='M18 15l3 3l-3 3'></path>\n
</Icon>