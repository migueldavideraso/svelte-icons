<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M3 3v18h18'></path>\n  <circle cx='9' cy='9' r='2'></circle>\n  <circle cx='19' cy='7' r='2'></circle>\n  <circle cx='14' cy='15' r='2'></circle>\n  <line x1='10.16' y1='10.62' x2='12.5' y2='13.5'></line>\n  <path d='M15.088 13.328l2.837 -4.586'></path>\n
</Icon>