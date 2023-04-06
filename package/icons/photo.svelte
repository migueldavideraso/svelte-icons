<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='15' y1='8' x2='15.01' y2='8'></line>\n  <rect x='4' y='4' width='16' height='16' rx='3'></rect>\n  <path d='M4 15l4 -4a3 5 0 0 1 3 0l5 5'></path>\n  <path d='M14 14l1 -1a3 5 0 0 1 3 0l2 2'></path>\n
</Icon>