<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <polyline points='8 16 10 10 16 8 14 14 8 16'></polyline>\n  <circle cx='12' cy='12' r='9'></circle>\n  <line x1='12' y1='3' x2='12' y2='5'></line>\n  <line x1='12' y1='19' x2='12' y2='21'></line>\n  <line x1='3' y1='12' x2='5' y2='12'></line>\n  <line x1='19' y1='12' x2='21' y2='12'></line>\n
</Icon>