<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect x='3' y='3' width='4' height='4' rx='1'></rect>\n  <rect x='17' y='17' width='4' height='4' rx='1'></rect>\n  <line x1='7' y1='5' x2='14' y2='5'></line>\n  <line x1='10' y1='19' x2='17' y2='19'></line>\n  <circle cx='9' cy='19' r='1'></circle>\n  <circle cx='15' cy='5' r='1'></circle>\n  <path d='M7 5.5a5 6.5 0 0 1 5 6.5a5 6.5 0 0 0 5 6.5'></path>\n
</Icon>