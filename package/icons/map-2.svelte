<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='18' y1='6' x2='18' y2='6.01'></line>\n  <path d='M18 13l-3.5 -5a4 4 0 1 1 7 0l-3.5 5'></path>\n  <polyline points='10.5 4.75 9 4 3 7 3 20 9 17 15 20 21 17 21 15'></polyline>\n  <line x1='9' y1='4' x2='9' y2='17'></line>\n  <line x1='15' y1='15' x2='15' y2='20'></line>\n
</Icon>