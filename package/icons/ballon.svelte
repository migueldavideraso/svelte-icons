<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M14 8a2 2 0 0 0 -2 -2'></path>\n  <path d='M6 8a6 6 0 1 1 12 0c0 4.97 -2.686 9 -6 9s-6 -4.03 -6 -9'></path>\n  <path d='M12 17v1a2 2 0 0 1 -2 2h-3a2 2 0 0 0 -2 2'></path>\n
</Icon>