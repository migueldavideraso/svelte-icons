<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='5' cy='16' r='3'></circle>\n  <circle cx='19' cy='16' r='3'></circle>\n  <path d='M7.5 14h5l4 -4h-10.5m1.5 4l4 -4'></path>\n  <path d='M13 6h2l1.5 3l2 4'></path>\n
</Icon>