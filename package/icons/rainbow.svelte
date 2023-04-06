<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M22 17c0 -5.523 -4.477 -10 -10 -10s-10 4.477 -10 10'></path>\n  <path d='M18 17a6 6 0 1 0 -12 0'></path>\n  <path d='M14 17a2 2 0 1 0 -4 0'></path>\n
</Icon>