<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='3' y1='21' x2='21' y2='21'></line>\n  <line x1='9' y1='8' x2='10' y2='8'></line>\n  <line x1='9' y1='12' x2='10' y2='12'></line>\n  <line x1='9' y1='16' x2='10' y2='16'></line>\n  <line x1='14' y1='8' x2='15' y2='8'></line>\n  <line x1='14' y1='12' x2='15' y2='12'></line>\n  <line x1='14' y1='16' x2='15' y2='16'></line>\n  <path d='M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16'></path>\n
</Icon>