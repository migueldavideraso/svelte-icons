<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='13' cy='4' r='1'></circle>\n  <path d='M4 17l5 1l.75 -1.5'></path>\n  <path d='M15 21l0 -4l-4 -3l1 -6'></path>\n  <path d='M7 12l0 -3l5 -1l3 3l3 1'></path>\n
</Icon>