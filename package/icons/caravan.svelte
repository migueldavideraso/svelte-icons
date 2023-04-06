<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='11' cy='17' r='2'></circle>\n  <line x1='21' y1='17' x2='13' y2='17'></line>\n  <path d='M9 17h-5a1 1 0 0 1 -1 -1v-9a2 2 0 0 1 2 -2h10l4 4v8'></path>\n  <rect x='6' y='8' width='6' height='4' rx='1'></rect>\n
</Icon>