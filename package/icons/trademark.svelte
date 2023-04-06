<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M4.5 9h5m-2.5 0v6'></path>\n  <path d='M13 15v-6l3 4l3 -4v6'></path>\n
</Icon>