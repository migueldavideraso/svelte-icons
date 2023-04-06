<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M9 5h10l2 2l-2 2h-10a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1'></path>\n  <path d='M13 13h-7l-2 2l2 2h7a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1'></path>\n  <line x1='12' y1='22' x2='12' y2='17'></line>\n  <line x1='12' y1='13' x2='12' y2='9'></line>\n  <line x1='12' y1='5' x2='12' y2='3'></line>\n
</Icon>