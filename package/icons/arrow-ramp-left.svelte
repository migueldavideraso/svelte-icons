<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='17' y1='3' x2='17' y2='11.707'></line>\n  <path d='M13 7l4 -4l4 4'></path>\n  <path d='M7 14l-4 -4l4 -4'></path>\n  <path d='M17 21a11 11 0 0 0 -11 -11h-3'></path>\n
</Icon>