<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='5' cy='5' r='2'></circle>\n  <circle cx='19' cy='5' r='2'></circle>\n  <circle cx='5' cy='19' r='2'></circle>\n  <circle cx='19' cy='19' r='2'></circle>\n  <path d='M5 7v10'></path>\n  <path d='M7 5h10'></path>\n  <path d='M7 19h10'></path>\n  <path d='M19 7v10'></path>\n  <path d='M10 10h4'></path>\n  <path d='M12 14v-4'></path>\n
</Icon>