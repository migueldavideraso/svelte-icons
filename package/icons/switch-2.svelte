<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6'></path>\n  <path d='M18 4l3 3l-3 3'></path>\n  <path d='M3 7h5l7 10h6'></path>\n  <path d='M18 20l3 -3l-3 -3'></path>\n
</Icon>