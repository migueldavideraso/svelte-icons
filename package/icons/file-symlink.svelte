<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M4 21v-4a3 3 0 0 1 3 -3h5'></path>\n  <path d='M9 17l3 -3l-3 -3'></path>\n  <path d='M14 3v4a1 1 0 0 0 1 1h4'></path>\n  <path d='M5 11v-6a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-9.5'></path>\n
</Icon>