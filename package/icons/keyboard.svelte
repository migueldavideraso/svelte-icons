<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect x='2' y='6' width='20' height='12' rx='2'></rect>\n  <line x1='6' y1='10' x2='6' y2='10'></line>\n  <line x1='10' y1='10' x2='10' y2='10'></line>\n  <line x1='14' y1='10' x2='14' y2='10'></line>\n  <line x1='18' y1='10' x2='18' y2='10'></line>\n  <line x1='6' y1='14' x2='6' y2='14.01'></line>\n  <line x1='18' y1='14' x2='18' y2='14.01'></line>\n  <line x1='10' y1='14' x2='14' y2='14'></line>\n
</Icon>