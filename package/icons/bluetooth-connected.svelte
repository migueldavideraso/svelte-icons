<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <polyline points='7 8 17 16 12 20 12 4 17 8 7 16'></polyline>\n  <line x1='4' y1='12' x2='5' y2='12'></line>\n  <line x1='18' y1='12' x2='19' y2='12'></line>\n
</Icon>