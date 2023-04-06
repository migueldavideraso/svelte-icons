<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <polyline points='3 7 9 4 15 7 21 4 21 17 15 20 9 17 3 20 3 7'></polyline>\n  <line x1='9' y1='4' x2='9' y2='17'></line>\n  <line x1='15' y1='7' x2='15' y2='20'></line>\n
</Icon>