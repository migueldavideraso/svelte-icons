<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M7 12h10'></path>\n  <path d='M7 4v16'></path>\n  <path d='M17 4v16'></path>\n  <path d='M15 20h4'></path>\n  <path d='M15 4h4'></path>\n  <path d='M5 20h4'></path>\n  <path d='M5 4h4'></path>\n
</Icon>