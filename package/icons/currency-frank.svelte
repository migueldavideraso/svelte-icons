<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M17 5h-6a2 2 0 0 0 -2 2v12'></path>\n  <path d='M7 15h4'></path>\n  <path d='M9 11h7'></path>\n
</Icon>