<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <polyline points='3 9 12 15 21 9 12 3 3 9'></polyline>\n  <path d='M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10'></path>\n  <line x1='3' y1='19' x2='9' y2='13'></line>\n  <line x1='15' y1='13' x2='21' y2='19'></line>\n
</Icon>