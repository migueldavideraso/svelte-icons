<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect x='3' y='15' width='6' height='6' rx='2'></rect>\n  <rect x='15' y='15' width='6' height='6' rx='2'></rect>\n  <rect x='9' y='3' width='6' height='6' rx='2'></rect>\n  <path d='M6 15v-1a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v1'></path>\n  <line x1='12' y1='9' x2='12' y2='12'></line>\n
</Icon>