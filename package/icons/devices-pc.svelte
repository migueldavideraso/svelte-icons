<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M3 5h6v14h-6z'></path>\n  <path d='M12 9h10v7h-10z'></path>\n  <path d='M14 19h6'></path>\n  <path d='M17 16v3'></path>\n  <path d='M6 13v.01'></path>\n  <path d='M6 16v.01'></path>\n
</Icon>