<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='6' y1='5' x2='6' y2='19'></line>\n  <line x1='18' y1='5' x2='18' y2='19'></line>\n  <line x1='2' y1='15' x2='22' y2='15'></line>\n  <path d='M3 8a7.5 7.5 0 0 0 3 -2a6.5 6.5 0 0 0 12 0a7.5 7.5 0 0 0 3 2'></path>\n  <line x1='12' y1='10' x2='12' y2='15'></line>\n
</Icon>