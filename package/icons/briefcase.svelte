<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect x='3' y='7' width='18' height='13' rx='2'></rect>\n  <path d='M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2'></path>\n  <line x1='12' y1='12' x2='12' y2='12.01'></line>\n  <path d='M3 13a20 20 0 0 0 18 0'></path>\n
</Icon>