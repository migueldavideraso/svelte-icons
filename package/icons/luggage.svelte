<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect x='6' y='6' width='12' height='14' rx='2'></rect>\n  <path d='M9 6v-1a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v1'></path>\n  <path d='M6 10h12'></path>\n  <path d='M6 16h12'></path>\n  <path d='M9 20v1'></path>\n  <path d='M15 20v1'></path>\n
</Icon>