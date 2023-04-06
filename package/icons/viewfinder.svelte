<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='12' cy='12' r='9'></circle>\n  <line x1='12' y1='3' x2='12' y2='7'></line>\n  <line x1='12' y1='21' x2='12' y2='18'></line>\n  <line x1='3' y1='12' x2='7' y2='12'></line>\n  <line x1='21' y1='12' x2='18' y2='12'></line>\n  <line x1='12' y1='12' x2='12' y2='12.01'></line>\n
</Icon>