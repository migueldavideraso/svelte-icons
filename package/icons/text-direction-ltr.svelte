<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M5 19h14'></path>\n  <path d='M17 21l2 -2l-2 -2'></path>\n  <path d='M16 4h-6.5a3.5 3.5 0 0 0 0 7h.5'></path>\n  <path d='M14 15v-11'></path>\n  <path d='M10 15v-11'></path>\n
</Icon>