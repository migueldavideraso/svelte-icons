<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M15 4.5l-4 4l-4 1.5l-1.5 1.5l7 7l1.5 -1.5l1.5 -4l4 -4'></path>\n  <line x1='9' y1='15' x2='4.5' y2='19.5'></line>\n  <line x1='14.5' y1='4' x2='20' y2='9.5'></line>\n
</Icon>