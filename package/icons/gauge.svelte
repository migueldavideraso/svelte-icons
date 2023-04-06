<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='12' cy='12' r='9'></circle>\n  <circle cx='12' cy='12' r='1'></circle>\n  <line x1='13.41' y1='10.59' x2='16' y2='8'></line>\n  <path d='M7 12a5 5 0 0 1 5 -5'></path>\n
</Icon>