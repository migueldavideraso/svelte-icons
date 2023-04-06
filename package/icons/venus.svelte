<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='12' cy='9' r='5'></circle>\n  <line x1='12' y1='14' x2='12' y2='21'></line>\n  <line x1='9' y1='18' x2='15' y2='18'></line>\n
</Icon>