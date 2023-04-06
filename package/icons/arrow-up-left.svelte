<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='7' y1='7' x2='17' y2='17'></line>\n  <polyline points='16 7 7 7 7 16'></polyline>\n
</Icon>