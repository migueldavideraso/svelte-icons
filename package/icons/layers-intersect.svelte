<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect x='8' y='4' width='12' height='12' rx='2'></rect>\n  <rect x='4' y='8' width='12' height='12' rx='2'></rect>\n
</Icon>