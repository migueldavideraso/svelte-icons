<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M4 7v-1a2 2 0 0 1 2 -2h2'></path>\n  <path d='M4 17v1a2 2 0 0 0 2 2h2'></path>\n  <path d='M16 4h2a2 2 0 0 1 2 2v1'></path>\n  <path d='M16 20h2a2 2 0 0 0 2 -2v-1'></path>\n  <rect x='5' y='11' width='1' height='2'></rect>\n  <line x1='10' y1='11' x2='10' y2='13'></line>\n  <rect x='14' y='11' width='1' height='2'></rect>\n  <line x1='19' y1='11' x2='19' y2='13'></line>\n
</Icon>