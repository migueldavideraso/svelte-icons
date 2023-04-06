<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect x='3' y='4' width='18' height='8' rx='3'></rect>\n  <rect x='3' y='12' width='18' height='8' rx='3'></rect>\n  <line x1='7' y1='8' x2='7' y2='8.01'></line>\n  <line x1='7' y1='16' x2='7' y2='16.01'></line>\n
</Icon>