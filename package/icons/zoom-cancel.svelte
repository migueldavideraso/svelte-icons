<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='10' cy='10' r='7'></circle>\n  <line x1='8' y1='8' x2='12' y2='12'></line>\n  <line x1='12' y1='8' x2='8' y2='12'></line>\n  <line x1='21' y1='21' x2='15' y2='15'></line>\n
</Icon>