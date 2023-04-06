<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M5 5h3m4 0h9'></path>\n  <path d='M3 10h11m4 0h1'></path>\n  <path d='M5 15h5m4 0h7'></path>\n  <path d='M3 20h9m4 0h3'></path>\n
</Icon>