<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect x='3' y='14' width='4' height='4' rx='1'></rect>\n  <rect x='17' y='14' width='4' height='4' rx='1'></rect>\n  <rect x='10' y='6' width='4' height='4' rx='1'></rect>\n  <path d='M10 8.5a6 6 0 0 0 -5 5.5'></path>\n  <path d='M14 8.5a6 6 0 0 1 5 5.5'></path>\n  <line x1='10' y1='8' x2='4' y2='8'></line>\n  <line x1='20' y1='8' x2='14' y2='8'></line>\n  <circle cx='3' cy='8' r='1'></circle>\n  <circle cx='21' cy='8' r='1'></circle>\n
</Icon>