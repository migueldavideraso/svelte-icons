<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M5.636 18.364a9 9 0 1 0 12.728 -12.728a9 9 0 0 0 -12.728 12.728z'></path>\n  <path d='M12.495 3.02a9 9 0 0 1 -9.475 9.475'></path>\n  <path d='M20.98 11.505a9 9 0 0 0 -9.475 9.475'></path>\n
</Icon>