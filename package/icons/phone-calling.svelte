<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2'></path>\n  <line x1='15' y1='7' x2='15' y2='7.01'></line>\n  <line x1='18' y1='7' x2='18' y2='7.01'></line>\n  <line x1='21' y1='7' x2='21' y2='7.01'></line>\n
</Icon>