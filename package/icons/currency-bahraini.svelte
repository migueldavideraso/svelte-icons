<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M3 10v1a4 4 0 0 0 4 4h2a2 2 0 0 0 2 -2v-3'></path>\n  <path d='M7 19.01v-.01'></path>\n  <path d='M14 15.01v-.01'></path>\n  <path d='M17 15h2.004a2 2 0 0 0 1.649 -3.131l-2.653 -3.869'></path>\n
</Icon>