<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M3 15l9 6l9 -6l-9 -6l-9 6'></path>\n  <path d='M3 9l9 6l9 -6l-9 -6l-9 6'></path>\n  <line x1='3' y1='9' x2='3' y2='15'></line>\n  <line x1='21' y1='9' x2='21' y2='15'></line>\n  <line x1='12' y1='3' x2='12' y2='9'></line>\n  <line x1='12' y1='15' x2='12' y2='21'></line>\n
</Icon>