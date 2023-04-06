<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M8 9l3 3l-3 3'></path>\n  <line x1='13' y1='15' x2='16' y2='15'></line>\n  <rect x='4' y='4' width='16' height='16' rx='4'></rect>\n
</Icon>