<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2'></path>\n  <rect x='9' y='3' width='6' height='4' rx='2'></rect>\n  <path d='M9 17v-5'></path>\n  <path d='M12 17v-1'></path>\n  <path d='M15 17v-3'></path>\n
</Icon>