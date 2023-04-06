<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='7' y1='12' x2='21' y2='12'></line>\n  <path d='M18 15l3 -3l-3 -3'></path>\n  <path d='M3 10h4v4h-4z'></path>\n
</Icon>