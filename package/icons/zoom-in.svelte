<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='10' cy='10' r='7'></circle>\n  <line x1='7' y1='10' x2='13' y2='10'></line>\n  <line x1='10' y1='7' x2='10' y2='13'></line>\n  <line x1='21' y1='21' x2='15' y2='15'></line>\n
</Icon>