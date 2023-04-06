<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M12 3l-4 7h8z'></path>\n  <circle cx='17' cy='17' r='3'></circle>\n  <rect x='4' y='14' width='6' height='6' rx='1'></rect>\n
</Icon>