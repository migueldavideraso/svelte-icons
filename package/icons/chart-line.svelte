<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='4' y1='19' x2='20' y2='19'></line>\n  <polyline points='4 15 8 9 12 11 16 6 20 10'></polyline>\n
</Icon>