<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M11 20h-.01'></path>\n  <path d='M15 20h-.01'></path>\n  <path d='M19 20h-.01'></path>\n  <path d='M4 7l3 -3l3 3'></path>\n  <path d='M7 20v-16'></path>\n
</Icon>