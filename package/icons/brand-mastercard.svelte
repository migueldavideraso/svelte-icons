<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='14' cy='12' r='3'></circle>\n  <path d='M12 9.765a3 3 0 1 0 0 4.47'></path>\n  <rect x='3' y='5' width='18' height='14' rx='2'></rect>\n
</Icon>