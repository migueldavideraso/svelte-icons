<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M5 8h8.5a2.5 2.5 0 1 0 -2.34 -3.24'></path>\n  <path d='M3 12h15.5a2.5 2.5 0 1 1 -2.34 3.24'></path>\n  <path d='M4 16h5.5a2.5 2.5 0 1 1 -2.34 3.24'></path>\n
</Icon>