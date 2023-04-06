<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect x='6' y='6' width='12' height='12' rx='3'></rect>\n  <path d='M9 18v3h6v-3'></path>\n  <path d='M9 6v-3h6v3'></path>\n  <path d='M12 10a2 2 0 1 0 2 2'></path>\n
</Icon>