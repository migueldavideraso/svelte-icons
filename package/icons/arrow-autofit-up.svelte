<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M12 4h-6a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h8'></path>\n  <path d='M18 20v-17'></path>\n  <path d='M15 6l3 -3l3 3'></path>\n
</Icon>