<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='8' y1='21' x2='12' y2='21'></line>\n  <line x1='10' y1='21' x2='10' y2='3'></line>\n  <path d='M10 4l9 4l-9 4'></path>\n
</Icon>