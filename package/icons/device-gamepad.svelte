<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect x='2' y='6' width='20' height='12' rx='2'></rect>\n  <path d='M6 12h4m-2 -2v4'></path>\n  <line x1='15' y1='11' x2='15' y2='11.01'></line>\n  <line x1='18' y1='13' x2='18' y2='13.01'></line>\n
</Icon>