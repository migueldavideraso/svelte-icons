<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='12' cy='9' r='6'></circle>\n  <polyline points='9 14.2 9 21 12 19 15 21 15 14.2' transform='rotate(-30 12 9)'></polyline>\n  <polyline points='9 14.2 9 21 12 19 15 21 15 14.2' transform='rotate(30 12 9)'></polyline>\n
</Icon>