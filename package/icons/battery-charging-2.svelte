<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M4 9a2 2 0 0 1 2 -2h11a2 2 0 0 1 2 2v.5a0.5 .5 0 0 0 .5 .5a0.5 .5 0 0 1 .5 .5v3a0.5 .5 0 0 1 -.5 .5a0.5 .5 0 0 0 -.5 .5v.5a2 2 0 0 1 -2 2h-4.5'></path>\n  <path d='M3 15h6v2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2v-2z'></path>\n  <path d='M6 22v-3'></path>\n  <path d='M4 15v-2.5'></path>\n  <path d='M8 15v-2.5'></path>\n
</Icon>