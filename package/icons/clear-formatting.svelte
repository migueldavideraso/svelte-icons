<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M17 15l4 4m0 -4l-4 4'></path>\n  <path d='M7 6v-1h11v1'></path>\n  <line x1='7' y1='19' x2='11' y2='19'></line>\n  <line x1='13' y1='5' x2='9' y2='19'></line>\n
</Icon>