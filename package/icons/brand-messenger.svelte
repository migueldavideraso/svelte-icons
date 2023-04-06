<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1'></path>\n  <path d='M8 13l3 -2l2 2l3 -2'></path>\n
</Icon>