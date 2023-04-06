<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M17.657 11.004a6 6 0 1 0 -11.315 0'></path>\n  <path d='M6.342 11l5.658 11l5.657 -10.996z'></path>\n
</Icon>