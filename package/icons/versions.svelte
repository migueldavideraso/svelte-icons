<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect x='10' y='5' width='10' height='14' rx='2'></rect>\n  <line x1='7' y1='7' x2='7' y2='17'></line>\n  <line x1='4' y1='8' x2='4' y2='16'></line>\n
</Icon>