<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M3 18l3.279 -11.476a0.75 .75 0 0 1 1.442 0l3.279 11.476'></path>\n  <path d='M21 6h-4a3 3 0 0 0 0 6h1a3 3 0 0 1 0 6h-4'></path>\n  <path d='M17 20v-2'></path>\n  <path d='M18 6v-2'></path>\n  <path d='M4.5 14h5'></path>\n
</Icon>