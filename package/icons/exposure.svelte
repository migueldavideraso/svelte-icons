<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect x='4' y='4' width='16' height='16' rx='2'></rect>\n  <line x1='4.6' y1='19.4' x2='19.4' y2='4.6'></line>\n  <path d='M7 9h4m-2 -2v4'></path>\n  <line x1='13' y1='16' x2='17' y2='16'></line>\n
</Icon>