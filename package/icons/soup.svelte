<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M3 19h18'></path>\n  <path d='M3 11h18a8 8 0 0 1 -8 8h-2a8 8 0 0 1 -8 -8z'></path>\n  <path d='M9 8v-3'></path>\n  <path d='M12 5v3'></path>\n  <path d='M15 5v3'></path>\n
</Icon>