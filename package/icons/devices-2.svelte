<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M10 15h-6a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h6'></path>\n  <rect x='13' y='4' width='8' height='16' rx='1'></rect>\n  <line x1='7' y1='19' x2='10' y2='19'></line>\n  <line x1='17' y1='8' x2='17' y2='8.01'></line>\n  <circle cx='17' cy='16' r='1'></circle>\n  <line x1='9' y1='15' x2='9' y2='19'></line>\n
</Icon>