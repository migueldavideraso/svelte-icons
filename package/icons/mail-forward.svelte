<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5'></path>\n  <path d='M3 6l9 6l9 -6'></path>\n  <path d='M15 18h6'></path>\n  <path d='M18 15l3 3l-3 3'></path>\n
</Icon>