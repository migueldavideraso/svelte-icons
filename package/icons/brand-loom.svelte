<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M17.464 6.518a6.001 6.001 0 1 0 -3.023 7.965'></path>\n  <path d='M17.482 17.464a6.001 6.001 0 1 0 -7.965 -3.023'></path>\n  <path d='M6.54 17.482a6.001 6.001 0 1 0 3.024 -7.965'></path>\n  <path d='M6.518 6.54a6.001 6.001 0 1 0 7.965 3.024'></path>\n
</Icon>