<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='12' y1='21' x2='12' y2='3'></line>\n  <path d='M15 6l-3 -3l-3 3'></path>\n  <line x1='9' y1='21' x2='15' y2='21'></line>\n
</Icon>