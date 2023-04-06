<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='11' y1='5' x2='17' y2='5'></line>\n  <line x1='7' y1='19' x2='13' y2='19'></line>\n  <line x1='14' y1='5' x2='10' y2='19'></line>\n
</Icon>