<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect x='3' y='6' width='18' height='14' rx='2'></rect>\n  <path d='M6 6v-2'></path>\n  <line x1='19' y1='4' x2='19' y2='6'></line>\n  <line x1='6.5' y1='13' x2='9.5' y2='13'></line>\n  <line x1='14.5' y1='13' x2='17.5' y2='13'></line>\n  <line x1='16' y1='11.5' x2='16' y2='14.5'></line>\n
</Icon>