<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M15 19v-2a2 2 0 0 1 2 -2h2'></path>\n  <path d='M15 5v2a2 2 0 0 0 2 2h2'></path>\n  <path d='M5 15h2a2 2 0 0 1 2 2v2'></path>\n  <path d='M5 9h2a2 2 0 0 0 2 -2v-2'></path>\n
</Icon>