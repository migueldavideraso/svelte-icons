<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M3 18v-12h4.5a3 3 0 0 1 0 6a3 3 0 0 1 0 6h-4.5'></path>\n  <line x1='3' y1='12' x2='7.5' y2='12'></line>\n  <path d='M14 13h7a3.5 3.5 0 0 0 -7 0v2a3.5 3.5 0 0 0 6.64 1'></path>\n  <line x1='16' y1='6' x2='19' y2='6'></line>\n
</Icon>