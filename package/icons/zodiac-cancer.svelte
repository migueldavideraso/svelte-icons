<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='6' cy='12' r='3'></circle>\n  <circle cx='18' cy='12' r='3'></circle>\n  <path d='M3 12a10 6.5 0 0 1 14 -6.5'></path>\n  <path d='M21 12a10 6.5 0 0 1 -14 6.5'></path>\n
</Icon>