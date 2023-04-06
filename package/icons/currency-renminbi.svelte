<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M15 9v8a2 2 0 1 0 4 0'></path>\n  <path d='M19 9h-14'></path>\n  <path d='M19 5h-14'></path>\n  <path d='M9 9v4c0 2.5 -.667 4 -2 6'></path>\n
</Icon>