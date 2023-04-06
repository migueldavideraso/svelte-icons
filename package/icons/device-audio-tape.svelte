<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect x='3' y='5' width='18' height='14' rx='2'></rect>\n  <path d='M3 17l4 -3h10l4 3'></path>\n  <circle cx='7.5' cy='9.5' r='.5' fill='currentColor'></circle>\n  <circle cx='16.5' cy='9.5' r='.5' fill='currentColor'></circle>\n
</Icon>