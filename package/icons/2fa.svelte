<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M7 16h-4l3.47 -4.66a2 2 0 1 0 -3.47 -1.54'></path>\n  <path d='M10 16v-8h4'></path>\n  <line x1='10' y1='12' x2='13' y2='12'></line>\n  <path d='M17 16v-6a2 2 0 0 1 4 0v6'></path>\n  <line x1='17' y1='13' x2='21' y2='13'></line>\n
</Icon>