<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M8.56 3.69a9 9 0 0 0 -2.92 1.95'></path>\n  <path d='M3.69 8.56a9 9 0 0 0 -.69 3.44'></path>\n  <path d='M3.69 15.44a9 9 0 0 0 1.95 2.92'></path>\n  <path d='M8.56 20.31a9 9 0 0 0 3.44 .69'></path>\n  <path d='M15.44 20.31a9 9 0 0 0 2.92 -1.95'></path>\n  <path d='M20.31 15.44a9 9 0 0 0 .69 -3.44'></path>\n  <path d='M20.31 8.56a9 9 0 0 0 -1.95 -2.92'></path>\n  <path d='M15.44 3.69a9 9 0 0 0 -3.44 -.69'></path>\n
</Icon>