<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='12' cy='12' r='9'></circle>\n  <path d='M13 12h5'></path>\n  <path d='M13 15h4'></path>\n  <path d='M13 18h1'></path>\n  <path d='M13 9h4'></path>\n  <path d='M13 6h1'></path>\n
</Icon>