<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M7 5h6a3.5 3.5 0 0 1 0 7h-6z'></path>\n  <path d='M13 12h1a3.5 3.5 0 0 1 0 7h-7v-7'></path>\n
</Icon>