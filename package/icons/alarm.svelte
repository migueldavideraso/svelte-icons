<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='12' cy='13' r='7'></circle>\n  <polyline points='12 10 12 13 14 13'></polyline>\n  <line x1='7' y1='4' x2='4.25' y2='6'></line>\n  <line x1='17' y1='4' x2='19.75' y2='6'></line>\n
</Icon>