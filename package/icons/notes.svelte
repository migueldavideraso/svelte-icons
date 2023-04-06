<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect x='5' y='3' width='14' height='18' rx='2'></rect>\n  <line x1='9' y1='7' x2='15' y2='7'></line>\n  <line x1='9' y1='11' x2='15' y2='11'></line>\n  <line x1='9' y1='15' x2='13' y2='15'></line>\n
</Icon>