<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='15' cy='15' r='4'></circle>\n  <path d='M18.5 18.5l2.5 2.5'></path>\n  <path d='M4 6h16'></path>\n  <path d='M4 12h4'></path>\n  <path d='M4 18h4'></path>\n
</Icon>