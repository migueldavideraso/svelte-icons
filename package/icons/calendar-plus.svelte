<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect x='4' y='5' width='16' height='16' rx='2'></rect>\n  <line x1='16' y1='3' x2='16' y2='7'></line>\n  <line x1='8' y1='3' x2='8' y2='7'></line>\n  <line x1='4' y1='11' x2='20' y2='11'></line>\n  <line x1='10' y1='16' x2='14' y2='16'></line>\n  <line x1='12' y1='14' x2='12' y2='18'></line>\n
</Icon>