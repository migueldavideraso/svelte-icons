<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='3' y1='18' x2='17' y2='18'></line>\n  <path d='M9 9l3 3l-3 3'></path>\n  <path d='M14 15l3 3l-3 3'></path>\n  <line x1='3' y1='3' x2='3' y2='21'></line>\n  <line x1='3' y1='12' x2='12' y2='12'></line>\n  <path d='M18 3l3 3l-3 3'></path>\n  <line x1='3' y1='6' x2='21' y2='6'></line>\n
</Icon>