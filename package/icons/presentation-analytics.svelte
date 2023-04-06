<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M9 12v-4'></path>\n  <path d='M15 12v-2'></path>\n  <path d='M12 12v-1'></path>\n  <path d='M3 4h18'></path>\n  <path d='M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-10'></path>\n  <path d='M12 16v4'></path>\n  <path d='M9 20h6'></path>\n
</Icon>