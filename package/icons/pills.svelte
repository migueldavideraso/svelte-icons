<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='8' cy='8' r='5'></circle>\n  <circle cx='17' cy='17' r='4'></circle>\n  <path d='M4.5 4.5l7 7'></path>\n  <path d='M19.5 14.5l-5 5'></path>\n
</Icon>