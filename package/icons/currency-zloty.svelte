<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M12 18h-7l7 -7h-7'></path>\n  <path d='M17 18v-13'></path>\n  <path d='M14 14.5l6 -3.5'></path>\n
</Icon>