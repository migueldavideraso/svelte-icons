<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='18' cy='17' r='2'></circle>\n  <circle cx='6' cy='17' r='2'></circle>\n  <path d='M8 17h5a6 6 0 0 1 5 -5v-5a2 2 0 0 0 -2 -2h-1'></path>\n  <path d='M10 4l-2 4h3l-2 4'></path>\n
</Icon>