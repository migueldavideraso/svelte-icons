<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M6 15a6 6 0 1 0 12 0'></path>\n  <path d='M18 15a6 6 0 0 0 -6 6'></path>\n  <path d='M12 21a6 6 0 0 0 -6 -6'></path>\n  <path d='M12 21v-10'></path>\n  <path d='M12 11a5 5 0 0 1 -5 -5v-3l3 2l2 -2l2 2l3 -2v3a5 5 0 0 1 -5 5z'></path>\n
</Icon>