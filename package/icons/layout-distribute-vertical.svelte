<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='4' y1='4' x2='4' y2='20'></line>\n  <line x1='20' y1='4' x2='20' y2='20'></line>\n  <rect x='9' y='6' width='6' height='12' rx='2'></rect>\n
</Icon>