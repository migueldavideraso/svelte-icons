<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M6 20.735a2 2 0 0 1 -1 -1.735v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-1'></path>\n  <path d='M11 17a2 2 0 0 1 2 2v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-2a2 2 0 0 1 2 -2z'></path>\n  <line x1='11' y1='5' x2='10' y2='5'></line>\n  <line x1='13' y1='7' x2='12' y2='7'></line>\n  <line x1='11' y1='9' x2='10' y2='9'></line>\n  <line x1='13' y1='11' x2='12' y2='11'></line>\n  <line x1='11' y1='13' x2='10' y2='13'></line>\n  <line x1='13' y1='15' x2='12' y2='15'></line>\n
</Icon>