<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M11 10v-5h-1m8 14v-5h-1'></path>\n  <rect x='15' y='5' width='3' height='5' rx='.5'></rect>\n  <rect x='10' y='14' width='3' height='5' rx='.5'></rect>\n  <path d='M6 10h.01m-.01 9h.01'></path>\n
</Icon>