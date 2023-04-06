<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='7' cy='7' r='4'></circle>\n  <path d='M7 3v4h4'></path>\n  <line x1='9' y1='17' x2='9' y2='21'></line>\n  <line x1='17' y1='14' x2='17' y2='21'></line>\n  <line x1='13' y1='13' x2='13' y2='21'></line>\n  <line x1='21' y1='12' x2='21' y2='21'></line>\n
</Icon>