<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M7 4a12.25 12.25 0 0 0 0 16'></path>\n  <path d='M17 4a12.25 12.25 0 0 1 0 16'></path>\n
</Icon>