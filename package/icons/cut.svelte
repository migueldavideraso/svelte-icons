<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='7' cy='17' r='3'></circle>\n  <circle cx='17' cy='17' r='3'></circle>\n  <line x1='9.15' y1='14.85' x2='18' y2='4'></line>\n  <line x1='6' y1='4' x2='14.85' y2='14.85'></line>\n
</Icon>