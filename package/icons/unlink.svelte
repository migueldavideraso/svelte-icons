<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5'></path>\n  <path d='M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5'></path>\n  <line x1='16' y1='21' x2='16' y2='19'></line>\n  <line x1='19' y1='16' x2='21' y2='16'></line>\n  <line x1='3' y1='8' x2='5' y2='8'></line>\n  <line x1='8' y1='3' x2='8' y2='5'></line>\n
</Icon>