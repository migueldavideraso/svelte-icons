<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M8.454 8.458l-1.653 2.545a6 6 0 0 0 10.32 6.123'></path>\n  <path d='M18 14a5.971 5.971 0 0 0 -.803 -3l-5.197 -8l-1.968 3.03'></path>\n  <path d='M3 3l18 18'></path>\n
</Icon>