<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='20' y1='6' x2='13' y2='6'></line>\n  <line x1='20' y1='12' x2='11' y2='12'></line>\n  <line x1='20' y1='18' x2='13' y2='18'></line>\n  <path d='M8 8l-4 4l4 4'></path>\n
</Icon>