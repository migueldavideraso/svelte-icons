<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M3 3a21 21 0 0 0 18 0'></path>\n  <path d='M3 21a21 21 0 0 1 18 0'></path>\n  <line x1='7' y1='4.5' x2='7' y2='19.5'></line>\n  <line x1='17' y1='4.5' x2='17' y2='19.5'></line>\n
</Icon>