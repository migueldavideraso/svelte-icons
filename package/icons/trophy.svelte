<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='8' y1='21' x2='16' y2='21'></line>\n  <line x1='12' y1='17' x2='12' y2='21'></line>\n  <line x1='7' y1='4' x2='17' y2='4'></line>\n  <path d='M17 4v8a5 5 0 0 1 -10 0v-8'></path>\n  <circle cx='5' cy='9' r='2'></circle>\n  <circle cx='19' cy='9' r='2'></circle>\n
</Icon>