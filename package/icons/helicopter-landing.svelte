<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect x='4' y='4' width='16' height='16' rx='2'></rect>\n  <line x1='9' y1='8' x2='9' y2='16'></line>\n  <line x1='9' y1='12' x2='15' y2='12'></line>\n  <line x1='15' y1='8' x2='15' y2='16'></line>\n
</Icon>