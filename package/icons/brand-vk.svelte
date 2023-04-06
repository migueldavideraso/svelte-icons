<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M10 6h2v12c-4.5 -1 -8 -6.5 -9 -12'></path>\n  <path d='M20 6c-1 2 -3 5 -5 6h-3'></path>\n  <path d='M20 18c-1 -2 -3 -5 -5 -6'></path>\n
</Icon>