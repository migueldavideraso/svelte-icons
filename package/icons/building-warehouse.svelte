<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M3 21v-13l9 -4l9 4v13'></path>\n  <path d='M13 13h4v8h-10v-6h6'></path>\n  <path d='M13 21v-9a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v3'></path>\n
</Icon>