<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M12 3l2 3l2 15h-8l2 -15z'></path>\n  <line x1='8' y1='9' x2='16' y2='9'></line>\n  <path d='M3 11l2 -2l-2 -2'></path>\n  <path d='M21 11l-2 -2l2 -2'></path>\n
</Icon>