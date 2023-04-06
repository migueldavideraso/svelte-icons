<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M17.2 7a6 7 0 1 0 0 10'></path>\n  <path d='M13 10h-8m0 4h8'></path>\n
</Icon>