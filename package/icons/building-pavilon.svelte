<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M3 21h7v-3a2 2 0 0 1 4 0v3h7'></path>\n  <line x1='6' y1='21' x2='6' y2='12'></line>\n  <line x1='18' y1='21' x2='18' y2='12'></line>\n  <path d='M6 12h12a3 3 0 0 0 3 -3a9 8 0 0 1 -9 -6a9 8 0 0 1 -9 6a3 3 0 0 0 3 3'></path>\n
</Icon>