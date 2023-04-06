<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M18 10h-4v-4'></path>\n  <path d='M20 4l-6 6'></path>\n  <path d='M6 14h4v4'></path>\n  <path d='M10 14l-6 6'></path>\n
</Icon>