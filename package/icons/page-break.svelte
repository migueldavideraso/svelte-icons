<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M14 3v4a1 1 0 0 0 1 1h4'></path>\n  <path d='M19 18v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1'></path>\n  <path d='M3 14h3m4.5 0h3m4.5 0h3'></path>\n  <path d='M5 10v-5a2 2 0 0 1 2 -2h7l5 5v2'></path>\n
</Icon>