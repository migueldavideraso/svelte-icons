<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='6' cy='17' r='3'></circle>\n  <circle cx='16' cy='17' r='3'></circle>\n  <polyline points='9 17 9 4 19 4 19 17'></polyline>\n  <line x1='9' y1='8' x2='19' y2='8'></line>\n
</Icon>