<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M5 4h14a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-7a1 1 0 0 0 -1 1v7a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1'></path>\n  <line x1='4' y1='8' x2='6' y2='8'></line>\n  <line x1='4' y1='12' x2='7' y2='12'></line>\n  <line x1='4' y1='16' x2='6' y2='16'></line>\n  <line x1='8' y1='4' x2='8' y2='6'></line>\n  <polyline points='12 4 12 7 '></polyline>\n  <polyline points='16 4 16 6 '></polyline>\n
</Icon>