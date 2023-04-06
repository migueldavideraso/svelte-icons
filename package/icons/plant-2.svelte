<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M2 9a10 10 0 1 0 20 0'></path>\n  <path d='M12 19a10 10 0 0 1 10 -10'></path>\n  <path d='M2 9a10 10 0 0 1 10 10'></path>\n  <path d='M12 4a9.7 9.7 0 0 1 2.99 7.5'></path>\n  <path d='M9.01 11.5a9.7 9.7 0 0 1 2.99 -7.5'></path>\n
</Icon>