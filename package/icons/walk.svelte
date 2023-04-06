<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='13' cy='4' r='1'></circle>\n  <line x1='7' y1='21' x2='10' y2='17'></line>\n  <path d='M16 21l-2 -4l-3 -3l1 -6'></path>\n  <path d='M6 12l2 -3l4 -1l3 3l3 1'></path>\n
</Icon>