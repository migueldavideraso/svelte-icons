<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='3' y1='6' x2='8' y2='6'></line>\n  <line x1='7' y1='18' x2='14' y2='18'></line>\n  <path d='M4.5 6l5.5 7v5'></path>\n  <path d='M10 13l6 -5'></path>\n  <line x1='12.5' y1='8' x2='17.5' y2='8'></line>\n  <line x1='20' y1='11' x2='20' y2='15'></line>\n  <line x1='20' y1='18' x2='20' y2='18.01'></line>\n
</Icon>