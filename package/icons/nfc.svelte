<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M11 20a3 3 0 0 1 -3 -3v-11l5 5'></path>\n  <path d='M13 4a3 3 0 0 1 3 3v11l-5 -5'></path>\n  <rect x='4' y='4' width='16' height='16' rx='3'></rect>\n
</Icon>