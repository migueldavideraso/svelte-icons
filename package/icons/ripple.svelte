<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M3 7c3 -2 6 -2 9 0s6 2 9 0'></path>\n  <path d='M3 17c3 -2 6 -2 9 0s6 2 9 0'></path>\n  <path d='M3 12c3 -2 6 -2 9 0s6 2 9 0'></path>\n
</Icon>