<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M5.634 5.638a9 9 0 0 0 12.728 12.727m1.68 -2.32a9 9 0 0 0 -12.086 -12.088'></path>\n  <path d='M16 12h2'></path>\n  <path d='M13 15h2'></path>\n  <path d='M13 18h1'></path>\n  <path d='M13 9h4'></path>\n  <path d='M13 6h1'></path>\n  <path d='M3 3l18 18'></path>\n
</Icon>