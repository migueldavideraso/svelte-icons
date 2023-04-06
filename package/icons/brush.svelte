<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M3 21v-4a4 4 0 1 1 4 4h-4'></path>\n  <path d='M21 3a16 16 0 0 0 -12.8 10.2'></path>\n  <path d='M21 3a16 16 0 0 1 -10.2 12.8'></path>\n  <path d='M10.6 9a9 9 0 0 1 4.4 4.4'></path>\n
</Icon>