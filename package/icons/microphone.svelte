<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect x='9' y='2' width='6' height='11' rx='3'></rect>\n  <path d='M5 10a7 7 0 0 0 14 0'></path>\n  <line x1='8' y1='21' x2='16' y2='21'></line>\n  <line x1='12' y1='17' x2='12' y2='21'></line>\n
</Icon>