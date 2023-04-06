<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='12' cy='12' r='3'></circle>\n  <line x1='12' y1='21' x2='12' y2='21.01'></line>\n  <line x1='3' y1='9' x2='3' y2='9.01'></line>\n  <line x1='21' y1='9' x2='21' y2='9.01'></line>\n  <path d='M8 20.1a9 9 0 0 1 -5 -7.1'></path>\n  <path d='M16 20.1a9 9 0 0 0 5 -7.1'></path>\n  <path d='M6.2 5a9 9 0 0 1 11.4 0'></path>\n
</Icon>