<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M9 15l-1 -3l4 -2l4 1h3.5'></path>\n  <circle cx='4' cy='19' r='1'></circle>\n  <circle cx='12' cy='6' r='1'></circle>\n  <path d='M12 17v-7'></path>\n  <path d='M8 20h7l1 -4l4 -2'></path>\n  <path d='M18 20h3'></path>\n
</Icon>