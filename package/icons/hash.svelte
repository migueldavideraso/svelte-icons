<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='5' y1='9' x2='19' y2='9'></line>\n  <line x1='5' y1='15' x2='19' y2='15'></line>\n  <line x1='11' y1='4' x2='7' y2='20'></line>\n  <line x1='17' y1='4' x2='13' y2='20'></line>\n
</Icon>