<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0'></path>\n  <path d='M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0'></path>\n  <line x1='3' y1='6' x2='3' y2='19'></line>\n  <line x1='12' y1='6' x2='12' y2='19'></line>\n  <line x1='21' y1='6' x2='21' y2='19'></line>\n
</Icon>