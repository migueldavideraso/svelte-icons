<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M12 5a5 5 0 1 0 -4 8'></path>\n  <path d='M16 13a5 5 0 1 0 -4 -8'></path>\n  <line x1='12' y1='21' x2='12' y2='5'></line>\n
</Icon>