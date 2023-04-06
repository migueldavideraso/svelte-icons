<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M4 20v-2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v2'></path>\n  <path d='M4 4v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2'></path>\n  <path d='M16 12h-8'></path>\n
</Icon>