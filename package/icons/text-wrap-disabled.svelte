<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='4' y1='6' x2='14' y2='6'></line>\n  <line x1='4' y1='18' x2='14' y2='18'></line>\n  <path d='M4 12h17l-3 -3m0 6l3 -3'></path>\n
</Icon>