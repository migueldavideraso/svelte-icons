<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='7' y1='3' x2='7' y2='11.707'></line>\n  <path d='M11 7l-4 -4l-4 4'></path>\n  <path d='M17 14l4 -4l-4 -4'></path>\n  <path d='M7 21a11 11 0 0 1 11 -11h3'></path>\n
</Icon>