<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='12' y1='8' x2='12.01' y2='8'></line>\n  <rect x='4' y='4' width='16' height='16' rx='2'></rect>\n  <polyline points='11 12 12 12 12 16 13 16'></polyline>\n
</Icon>