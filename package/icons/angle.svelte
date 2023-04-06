<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M21 19h-18l9 -15'></path>\n  <path d='M20.615 15.171h.015'></path>\n  <path d='M19.515 11.771h.015'></path>\n  <path d='M17.715 8.671h.015'></path>\n  <path d='M15.415 5.971h.015'></path>\n
</Icon>