<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M9 16v-8l-2 2'></path>\n  <path d='M13 16l4 -4'></path>\n  <path d='M17 16l-4 -4'></path>\n
</Icon>