<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect x='3' y='12' width='6' height='8' rx='1'></rect>\n  <rect x='9' y='8' width='6' height='12' rx='1'></rect>\n  <rect x='15' y='4' width='6' height='16' rx='1'></rect>\n  <line x1='4' y1='20' x2='18' y2='20'></line>\n
</Icon>