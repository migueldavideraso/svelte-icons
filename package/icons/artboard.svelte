<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect x='8' y='8' width='8' height='8' rx='1'></rect>\n  <line x1='3' y1='8' x2='4' y2='8'></line>\n  <line x1='3' y1='16' x2='4' y2='16'></line>\n  <line x1='8' y1='3' x2='8' y2='4'></line>\n  <line x1='16' y1='3' x2='16' y2='4'></line>\n  <line x1='20' y1='8' x2='21' y2='8'></line>\n  <line x1='20' y1='16' x2='21' y2='16'></line>\n  <line x1='8' y1='20' x2='8' y2='21'></line>\n  <line x1='16' y1='20' x2='16' y2='21'></line>\n
</Icon>