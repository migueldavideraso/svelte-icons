<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M20 20h-2a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h2'></path>\n  <path d='M4 20h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2'></path>\n  <path d='M12 8v8'></path>\n
</Icon>