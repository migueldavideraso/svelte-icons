<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='4' y1='6' x2='20' y2='6'></line>\n  <line x1='4' y1='18' x2='9' y2='18'></line>\n  <path d='M4 12h13a3 3 0 0 1 0 6h-4l2 -2m0 4l-2 -2'></path>\n
</Icon>