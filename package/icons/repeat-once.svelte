<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3'></path>\n  <path d='M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3'></path>\n  <path d='M11 11l1 -1v4'></path>\n
</Icon>