<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect x='3' y='3' width='6' height='6' rx='1'></rect>\n  <rect x='15' y='15' width='6' height='6' rx='1'></rect>\n  <path d='M21 11v-3a2 2 0 0 0 -2 -2h-6l3 3m0 -6l-3 3'></path>\n  <path d='M3 13v3a2 2 0 0 0 2 2h6l-3 -3m0 6l3 -3'></path>\n
</Icon>