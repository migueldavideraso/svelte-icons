<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='5' y1='20' x2='19' y2='20'></line>\n  <path d='M5 17h5v-.3a7 7 0 1 1 4 0v.3h5'></path>\n
</Icon>