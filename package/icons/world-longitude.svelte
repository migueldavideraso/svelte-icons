<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='12' cy='12' r='9'></circle>\n  <path d='M11.5 3a11.2 11.2 0 0 0 0 18'></path>\n  <path d='M12.5 3a11.2 11.2 0 0 1 0 18'></path>\n  <line x1='12' y1='3' x2='12' y2='21'></line>\n
</Icon>