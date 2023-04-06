<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M6 10h4v-4'></path>\n  <path d='M4 4l6 6'></path>\n  <path d='M18 14h-4v4'></path>\n  <path d='M14 14l6 6'></path>\n
</Icon>