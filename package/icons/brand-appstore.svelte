<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='12' cy='12' r='9'></circle>\n  <path d='M8 16l1.106 -1.99m1.4 -2.522l2.494 -4.488'></path>\n  <path d='M7 14h5m2.9 0h2.1'></path>\n  <path d='M16 16l-2.51 -4.518m-1.487 -2.677l-1.003 -1.805'></path>\n
</Icon>