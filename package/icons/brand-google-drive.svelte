<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M12 10l-6 10l-3 -5l6 -10z'></path>\n  <path d='M9 15h12l-3 5h-12'></path>\n  <path d='M15 15l-6 -10h6l6 10z'></path>\n
</Icon>