<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <polyline points='3 8 6 5 9 8'></polyline>\n  <polyline points='3 16 6 19 9 16'></polyline>\n  <line x1='6' y1='5' x2='6' y2='19'></line>\n  <line x1='13' y1='6' x2='20' y2='6'></line>\n  <line x1='13' y1='12' x2='20' y2='12'></line>\n  <line x1='13' y1='18' x2='20' y2='18'></line>\n
</Icon>