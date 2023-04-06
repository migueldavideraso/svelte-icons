<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='10' cy='10' r='7'></circle>\n  <path d='M21 21l-6 -6'></path>\n  <line x1='10' y1='13' x2='10' y2='13.01'></line>\n  <path d='M10 10a1.5 1.5 0 1 0 -1.14 -2.474'></path>\n
</Icon>