<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect x='3' y='4' width='18' height='16' rx='3'></rect>\n  <circle cx='9' cy='10' r='2'></circle>\n  <line x1='15' y1='8' x2='17' y2='8'></line>\n  <line x1='15' y1='12' x2='17' y2='12'></line>\n  <line x1='7' y1='16' x2='17' y2='16'></line>\n
</Icon>