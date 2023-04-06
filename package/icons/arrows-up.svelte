<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='17' y1='3' x2='17' y2='21'></line>\n  <path d='M4 6l3 -3l3 3'></path>\n  <path d='M20 6l-3 -3l-3 3'></path>\n  <line x1='7' y1='3' x2='7' y2='21'></line>\n
</Icon>