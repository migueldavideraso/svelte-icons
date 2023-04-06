<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='12' cy='12' r='7'></circle>\n  <path d='M4 4l3 3'></path>\n  <path d='M20 4l-3 3'></path>\n  <path d='M4 20l3 -3'></path>\n  <path d='M20 20l-3 -3'></path>\n
</Icon>