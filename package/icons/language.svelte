<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M4 5h7'></path>\n  <path d='M9 3v2c0 4.418 -2.239 8 -5 8'></path>\n  <path d='M5 9c-.003 2.144 2.952 3.908 6.7 4'></path>\n  <path d='M12 20l4 -9l4 9'></path>\n  <path d='M19.1 18h-6.2'></path>\n
</Icon>