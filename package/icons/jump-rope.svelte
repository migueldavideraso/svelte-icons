<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M6 14v-6a3 3 0 1 1 6 0v8a3 3 0 0 0 6 0v-6'></path>\n  <rect x='16' y='3' width='4' height='7' rx='2'></rect>\n  <rect x='4' y='14' width='4' height='7' rx='2'></rect>\n
</Icon>