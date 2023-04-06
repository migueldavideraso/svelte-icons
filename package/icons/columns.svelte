<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='4' y1='6' x2='9.5' y2='6'></line>\n  <line x1='4' y1='10' x2='9.5' y2='10'></line>\n  <line x1='4' y1='14' x2='9.5' y2='14'></line>\n  <line x1='4' y1='18' x2='9.5' y2='18'></line>\n  <line x1='14.5' y1='6' x2='20' y2='6'></line>\n  <line x1='14.5' y1='10' x2='20' y2='10'></line>\n  <line x1='14.5' y1='14' x2='20' y2='14'></line>\n  <line x1='14.5' y1='18' x2='20' y2='18'></line>\n
</Icon>