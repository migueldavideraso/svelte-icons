<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect x='3' y='13' width='18' height='8' rx='2'></rect>\n  <line x1='17' y1='17' x2='17' y2='17.01'></line>\n  <line x1='13' y1='17' x2='13' y2='17.01'></line>\n  <line x1='15' y1='13' x2='15' y2='11'></line>\n  <path d='M11.75 8.75a4 4 0 0 1 6.5 0'></path>\n  <path d='M8.5 6.5a8 8 0 0 1 13 0'></path>\n
</Icon>