<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M20 17v-12c0 -1.121 -.879 -2 -2 -2s-2 .879 -2 2v12l2 2l2 -2z'></path>\n  <path d='M16 7h4'></path>\n  <path d='M18 19h-13a2 2 0 1 1 0 -4h4a2 2 0 1 0 0 -4h-3'></path>\n
</Icon>