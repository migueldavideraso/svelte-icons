<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect x='3' y='5' width='18' height='14' rx='2'></rect>\n  <path d='M7 15v-4a2 2 0 0 1 4 0v4'></path>\n  <line x1='7' y1='13' x2='11' y2='13'></line>\n  <path d='M17 9v6h-1.5a1.5 1.5 0 1 1 1.5 -1.5'></path>\n
</Icon>