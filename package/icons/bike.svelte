<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='5' cy='18' r='3'></circle>\n  <circle cx='19' cy='18' r='3'></circle>\n  <polyline points='12 19 12 15 9 12 14 8 16 11 19 11'></polyline>\n  <circle cx='17' cy='5' r='1'></circle>\n
</Icon>