<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M8 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5'></path>\n  <line x1='8' y1='9' x2='12' y2='9'></line>\n  <line x1='16' y1='9' x2='22' y2='9'></line>\n  <line x1='19' y1='6' x2='19' y2='12'></line>\n
</Icon>