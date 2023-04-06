<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect x='4' y='4' width='16' height='4' rx='1'></rect>\n  <rect x='4' y='12' width='6' height='8' rx='1'></rect>\n  <line x1='14' y1='12' x2='20' y2='12'></line>\n  <line x1='14' y1='16' x2='20' y2='16'></line>\n  <line x1='14' y1='20' x2='20' y2='20'></line>\n
</Icon>