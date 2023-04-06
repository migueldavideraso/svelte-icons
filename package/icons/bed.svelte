<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M3 7v11m0 -4h18m0 4v-8a2 2 0 0 0 -2 -2h-8v6'></path>\n  <circle cx='7' cy='10' r='1'></circle>\n
</Icon>