<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M12 11v8l3 -3m-6 0l3 3'></path>\n  <line x1='9' y1='7' x2='10' y2='7'></line>\n  <line x1='14' y1='7' x2='15' y2='7'></line>\n  <line x1='19' y1='7' x2='20' y2='7'></line>\n  <line x1='4' y1='7' x2='5' y2='7'></line>\n
</Icon>