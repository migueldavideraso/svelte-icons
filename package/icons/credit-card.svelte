<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect x='3' y='5' width='18' height='14' rx='3'></rect>\n  <line x1='3' y1='10' x2='21' y2='10'></line>\n  <line x1='7' y1='15' x2='7.01' y2='15'></line>\n  <line x1='11' y1='15' x2='13' y2='15'></line>\n
</Icon>