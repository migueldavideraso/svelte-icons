<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='21' y1='7' x2='3' y2='7'></line>\n  <path d='M18 10l3 -3l-3 -3'></path>\n  <path d='M6 20l-3 -3l3 -3'></path>\n  <line x1='3' y1='17' x2='21' y2='17'></line>\n
</Icon>