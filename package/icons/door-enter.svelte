<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M13 12v.01'></path>\n  <path d='M3 21h18'></path>\n  <path d='M5 21v-16a2 2 0 0 1 2 -2h6m4 10.5v7.5'></path>\n  <path d='M21 7h-7m3 -3l-3 3l3 3'></path>\n
</Icon>