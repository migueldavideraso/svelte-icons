<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M8 19v-14h6a3 3 0 0 1 0 6h-8'></path>\n  <path d='M14 15h-8'></path>\n
</Icon>