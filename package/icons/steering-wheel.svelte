<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='12' cy='12' r='9'></circle>\n  <circle cx='12' cy='12' r='2'></circle>\n  <line x1='12' y1='14' x2='12' y2='21'></line>\n  <line x1='10' y1='12' x2='3.25' y2='10'></line>\n  <line x1='14' y1='12' x2='20.75' y2='10'></line>\n
</Icon>