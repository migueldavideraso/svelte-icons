<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M8 18l2 -13l2 -2l2 2l2 13'></path>\n  <path d='M5 21v-3h14v3'></path>\n  <line x1='3' y1='21' x2='21' y2='21'></line>\n
</Icon>