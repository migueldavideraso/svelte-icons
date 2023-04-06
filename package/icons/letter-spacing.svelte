<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M5 12v-5.5a2.5 2.5 0 0 1 5 0v5.5m0 -4h-5'></path>\n  <path d='M13 4l3 8l3 -8'></path>\n  <path d='M5 18h14'></path>\n  <path d='M17 20l2 -2l-2 -2'></path>\n  <path d='M7 16l-2 2l2 2'></path>\n
</Icon>