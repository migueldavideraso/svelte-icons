<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M4 20h4v-4h4v-4h4v-4h4'></path>\n  <path d='M11 4l-7 7v-4m4 4h-4'></path>\n
</Icon>