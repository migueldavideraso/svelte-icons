<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='7' y1='20' x2='17' y2='20'></line>\n  <path d='M6 6l6 -1l6 1'></path>\n  <line x1='12' y1='3' x2='12' y2='20'></line>\n  <path d='M9 12l-3 -6l-3 6a3 3 0 0 0 6 0'></path>\n  <path d='M21 12l-3 -6l-3 6a3 3 0 0 0 6 0'></path>\n
</Icon>