<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M6 12l6 -9l6 9l-6 9z'></path>\n  <path d='M6 12l6 -3l6 3l-6 2z'></path>\n
</Icon>