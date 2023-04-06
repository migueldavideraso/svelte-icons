<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='6' cy='18' r='2'></circle>\n  <circle cx='6' cy='6' r='2'></circle>\n  <circle cx='18' cy='18' r='2'></circle>\n  <line x1='6' y1='8' x2='6' y2='16'></line>\n  <path d='M11 6h5a2 2 0 0 1 2 2v8'></path>\n  <polyline points='14 9 11 6 14 3'></polyline>\n
</Icon>