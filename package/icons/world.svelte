<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='12' cy='12' r='9'></circle>\n  <line x1='3.6' y1='9' x2='20.4' y2='9'></line>\n  <line x1='3.6' y1='15' x2='20.4' y2='15'></line>\n  <path d='M11.5 3a17 17 0 0 0 0 18'></path>\n  <path d='M12.5 3a17 17 0 0 1 0 18'></path>\n
</Icon>