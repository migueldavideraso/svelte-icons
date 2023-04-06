<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M7 7h10v6a3 3 0 0 1 -3 3h-4a3 3 0 0 1 -3 -3v-6'></path>\n  <line x1='9' y1='3' x2='9' y2='7'></line>\n  <line x1='15' y1='3' x2='15' y2='7'></line>\n  <path d='M12 16v2a2 2 0 0 0 2 2h3'></path>\n
</Icon>