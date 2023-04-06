<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='4' y1='4' x2='10' y2='4'></line>\n  <line x1='14' y1='4' x2='20' y2='4'></line>\n  <rect x='4' y='8' width='6' height='12' rx='2'></rect>\n  <rect x='14' y='8' width='6' height='6' rx='2'></rect>\n
</Icon>