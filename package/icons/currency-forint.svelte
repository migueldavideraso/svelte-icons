<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M11 4h-4a3 3 0 0 0 -3 3v12'></path>\n  <path d='M10 11h-6'></path>\n  <path d='M16 4v13a2 2 0 0 0 2 2h2'></path>\n  <path d='M19 9h-5'></path>\n
</Icon>