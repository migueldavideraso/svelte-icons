<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M5 3a21 21 0 0 1 0 18'></path>\n  <path d='M19 3a21 21 0 0 0 0 18'></path>\n  <line x1='5' y1='12' x2='19' y2='12'></line>\n
</Icon>