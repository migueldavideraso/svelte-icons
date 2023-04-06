<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M19 8l-14 4.5v-5.5l14 -4.5z'></path>\n  <path d='M19 17l-14 4.5v-5.5l14 -4.5z'></path>\n  <path d='M19 11.5l-14 -4.5'></path>\n  <path d='M5 12.5l14 4.5'></path>\n
</Icon>