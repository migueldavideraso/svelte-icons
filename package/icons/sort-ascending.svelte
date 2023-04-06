<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='4' y1='6' x2='11' y2='6'></line>\n  <line x1='4' y1='12' x2='11' y2='12'></line>\n  <line x1='4' y1='18' x2='13' y2='18'></line>\n  <polyline points='15 9 18 6 21 9'></polyline>\n  <line x1='18' y1='6' x2='18' y2='18'></line>\n
</Icon>