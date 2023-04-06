<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M16 8a4 4 0 1 0 -8 0v1a4 4 0 1 0 8 0'></path>\n  <path d='M8 16a4 4 0 1 0 8 0v-8'></path>\n
</Icon>