<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect x='4' y='4' width='16' height='16' rx='2'></rect>\n  <path d='M8 16v.01'></path>\n  <path d='M8 12v.01'></path>\n  <path d='M8 8v.01'></path>\n  <path d='M16 16v.01'></path>\n  <path d='M16 12v.01'></path>\n  <path d='M16 8v.01'></path>\n  <path d='M12 8v.01'></path>\n  <path d='M12 16v.01'></path>\n
</Icon>