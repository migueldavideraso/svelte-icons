<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='5' y1='5' x2='5' y2='21'></line>\n  <line x1='19' y1='5' x2='19' y2='14'></line>\n  <path d='M5 5a5 5 0 0 1 7 0a5 5 0 0 0 7 0'></path>\n  <path d='M5 14a5 5 0 0 1 7 0a5 5 0 0 0 7 0'></path>\n
</Icon>