<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M21 17h-8l-3.5 -5h-6.5'></path>\n  <path d='M21 7h-8l-3.495 5'></path>\n  <path d='M18 10l3 -3l-3 -3'></path>\n  <path d='M18 20l3 -3l-3 -3'></path>\n
</Icon>