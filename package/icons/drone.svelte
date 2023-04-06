<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M10 10h4v4h-4z'></path>\n  <line x1='10' y1='10' x2='6.5' y2='6.5'></line>\n  <path d='M9.96 6a3.5 3.5 0 1 0 -3.96 3.96'></path>\n  <path d='M14 10l3.5 -3.5'></path>\n  <path d='M18 9.96a3.5 3.5 0 1 0 -3.96 -3.96'></path>\n  <line x1='14' y1='14' x2='17.5' y2='17.5'></line>\n  <path d='M14.04 18a3.5 3.5 0 1 0 3.96 -3.96'></path>\n  <line x1='10' y1='14' x2='6.5' y2='17.5'></line>\n  <path d='M6 14.04a3.5 3.5 0 1 0 3.96 3.96'></path>\n
</Icon>