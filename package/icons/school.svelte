<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M22 9l-10 -4l-10 4l10 4l10 -4v6'></path>\n  <path d='M6 10.6v5.4a6 3 0 0 0 12 0v-5.4'></path>\n
</Icon>