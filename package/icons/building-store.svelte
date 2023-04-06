<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='3' y1='21' x2='21' y2='21'></line>\n  <path d='M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4'></path>\n  <line x1='5' y1='21' x2='5' y2='10.85'></line>\n  <line x1='19' y1='21' x2='19' y2='10.85'></line>\n  <path d='M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4'></path>\n
</Icon>