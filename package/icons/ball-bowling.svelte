<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='12' cy='12' r='9'></circle>\n  <line x1='11' y1='9' x2='11' y2='9.01'></line>\n  <line x1='15' y1='8' x2='15' y2='8.01'></line>\n  <line x1='14' y1='12' x2='14' y2='12.01'></line>\n
</Icon>