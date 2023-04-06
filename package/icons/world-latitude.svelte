<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='12' cy='12' r='9'></circle>\n  <line x1='4.6' y1='7' x2='19.4' y2='7'></line>\n  <line x1='3' y1='12' x2='21' y2='12'></line>\n  <line x1='4.6' y1='17' x2='19.4' y2='17'></line>\n
</Icon>