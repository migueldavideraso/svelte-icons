<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect x='4' y='4' width='16' height='16' rx='2'></rect>\n  <path d='M7 7h3l6 6'></path>\n  <path d='M8 7v10'></path>\n  <path d='M7 17h2'></path>\n  <path d='M15 7h2'></path>\n  <path d='M16 7v10h-1l-7 -7'></path>\n
</Icon>