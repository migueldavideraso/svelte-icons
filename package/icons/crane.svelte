<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M6 21h6'></path>\n  <path d='M9 21v-18l-6 6h18'></path>\n  <path d='M9 3l10 6'></path>\n  <path d='M17 9v4a2 2 0 1 1 -2 2'></path>\n
</Icon>