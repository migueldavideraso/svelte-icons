<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='8' cy='15' r='4'></circle>\n  <line x1='10.85' y1='12.15' x2='19' y2='4'></line>\n  <line x1='18' y1='5' x2='20' y2='7'></line>\n  <line x1='15' y1='8' x2='17' y2='10'></line>\n
</Icon>