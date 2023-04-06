<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M18 21v-14'></path>\n  <path d='M9 15l3 -3l3 3'></path>\n  <path d='M15 10l3 -3l3 3'></path>\n  <line x1='3' y1='21' x2='21' y2='21'></line>\n  <line x1='12' y1='21' x2='12' y2='12'></line>\n  <path d='M3 6l3 -3l3 3'></path>\n  <path d='M6 21v-18'></path>\n
</Icon>