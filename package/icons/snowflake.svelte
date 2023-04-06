<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M10 4l2 1l2 -1m-2 -2v6.5l3 1.72'></path>\n  <path d='M10 4l2 1l2 -1m-2 -2v6.5l3 1.72' transform='rotate(60 12 12)'></path>\n  <path d='M10 4l2 1l2 -1m-2 -2v6.5l3 1.72' transform='rotate(120 12 12)'></path>\n  <path d='M10 4l2 1l2 -1m-2 -2v6.5l3 1.72' transform='rotate(180 12 12)'></path>\n  <path d='M10 4l2 1l2 -1m-2 -2v6.5l3 1.72' transform='rotate(240 12 12)'></path>\n  <path d='M10 4l2 1l2 -1m-2 -2v6.5l3 1.72' transform='rotate(300 12 12)'></path>\n
</Icon>