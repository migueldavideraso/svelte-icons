<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect x='4' y='4' width='16' height='16' rx='2'></rect>\n  <path d='M8 7.002l4 5.998l4 -6'></path>\n  <line x1='12' y1='17' x2='12' y2='13'></line>\n
</Icon>