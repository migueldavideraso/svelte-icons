<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect x='2' y='12' width='18' height='6' rx='3'></rect>\n  <path d='M6 12l1 -5h5l3 5'></path>\n  <line x1='21' y1='9' x2='13.2' y2='9'></line>\n
</Icon>