<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='12' cy='12' r='4'></circle>\n  <circle cx='12' cy='12' r='9'></circle>\n  <line x1='15' y1='15' x2='18.35' y2='18.35'></line>\n  <line x1='9' y1='15' x2='5.65' y2='18.35'></line>\n  <line x1='5.65' y1='5.65' x2='9' y2='9'></line>\n  <line x1='18.35' y1='5.65' x2='15' y2='9'></line>\n
</Icon>