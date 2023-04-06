<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M11 4a8 8 0 1 0 0 16'></path>\n  <path d='M20 4a8 8 0 1 0 0 16'></path>\n  <line x1='12' y1='12' x2='20' y2='12'></line>\n
</Icon>