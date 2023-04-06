<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect x='4' y='4' width='16' height='16' rx='2'></rect>\n  <path d='M4 8h16'></path>\n  <path d='M20 12h-16'></path>\n  <path d='M4 16h16'></path>\n  <path d='M9 4v4'></path>\n  <path d='M14 8v4'></path>\n  <path d='M8 12v4'></path>\n  <path d='M16 12v4'></path>\n  <path d='M11 16v4'></path>\n
</Icon>