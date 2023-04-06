<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <polyline points='15 4 19 4 19 8'></polyline>\n  <line x1='14.75' y1='9.25' x2='19' y2='4'></line>\n  <line x1='5' y1='19' x2='9' y2='15'></line>\n  <polyline points='15 19 19 19 19 15'></polyline>\n  <line x1='5' y1='5' x2='19' y2='19'></line>\n
</Icon>