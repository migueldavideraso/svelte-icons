<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M20 4v.01'></path>\n  <path d='M20 20v.01'></path>\n  <path d='M20 16v.01'></path>\n  <path d='M20 12v.01'></path>\n  <path d='M20 8v.01'></path>\n  <rect x='8' y='4' width='8' height='16' rx='1'></rect>\n  <path d='M4 4v.01'></path>\n  <path d='M4 20v.01'></path>\n  <path d='M4 16v.01'></path>\n  <path d='M4 12v.01'></path>\n  <path d='M4 8v.01'></path>\n
</Icon>