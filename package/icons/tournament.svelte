<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M5 4h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4'></path>\n  <path d='M5 14h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4'></path>\n  <path d='M10 7h4a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-4'></path>\n  <line x1='15' y1='12' x2='20' y2='12'></line>\n
</Icon>