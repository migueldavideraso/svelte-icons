<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='15' y1='6' x2='15.01' y2='6'></line>\n  <rect x='3' y='3' width='18' height='14' rx='3'></rect>\n  <path d='M3 13l4 -4a3 5 0 0 1 3 0l4 4'></path>\n  <path d='M13 12l2 -2a3 5 0 0 1 3 0l3 3'></path>\n  <line x1='8' y1='21' x2='8.01' y2='21'></line>\n  <line x1='12' y1='21' x2='12.01' y2='21'></line>\n  <line x1='16' y1='21' x2='16.01' y2='21'></line>\n
</Icon>