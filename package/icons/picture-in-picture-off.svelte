<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M11 19h-6a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v4'></path>\n  <rect x='14' y='14' width='7' height='5' rx='1'></rect>\n  <line x1='7' y1='9' x2='11' y2='13'></line>\n  <path d='M7 12v-3h3'></path>\n
</Icon>