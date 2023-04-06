<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M6 19v-16h4.5a4.5 4.5 0 1 1 0 9h-4.5'></path>\n  <path d='M19 21l-9 -9'></path>\n  <path d='M13 21l6 -6'></path>\n
</Icon>