<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M6 6h8a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-8'></path>\n  <line x1='8' y1='6' x2='8' y2='18'></line>\n  <line x1='8' y1='12' x2='14' y2='12'></line>\n  <line x1='9' y1='3' x2='9' y2='6'></line>\n  <line x1='13' y1='3' x2='13' y2='6'></line>\n  <line x1='9' y1='18' x2='9' y2='21'></line>\n  <line x1='13' y1='18' x2='13' y2='21'></line>\n
</Icon>