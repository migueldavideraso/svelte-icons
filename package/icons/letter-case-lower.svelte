<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='6.5' cy='15.5' r='3.5'></circle>\n  <path d='M10 12v7'></path>\n  <circle cx='17.5' cy='15.5' r='3.5'></circle>\n  <path d='M21 12v7'></path>\n
</Icon>