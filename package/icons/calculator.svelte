<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect x='4' y='3' width='16' height='18' rx='2'></rect>\n  <rect x='8' y='7' width='8' height='3' rx='1'></rect>\n  <line x1='8' y1='14' x2='8' y2='14.01'></line>\n  <line x1='12' y1='14' x2='12' y2='14.01'></line>\n  <line x1='16' y1='14' x2='16' y2='14.01'></line>\n  <line x1='8' y1='17' x2='8' y2='17.01'></line>\n  <line x1='12' y1='17' x2='12' y2='17.01'></line>\n  <line x1='16' y1='17' x2='16' y2='17.01'></line>\n
</Icon>