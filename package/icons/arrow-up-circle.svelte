<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='12' cy='12' r='9'></circle>\n  <line x1='12' y1='8' x2='8' y2='12'></line>\n  <line x1='12' y1='8' x2='12' y2='16'></line>\n  <line x1='16' y1='12' x2='12' y2='8'></line>\n
</Icon>