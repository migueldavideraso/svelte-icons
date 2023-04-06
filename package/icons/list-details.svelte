<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M13 5h8'></path>\n  <path d='M13 9h5'></path>\n  <path d='M13 15h8'></path>\n  <path d='M13 19h5'></path>\n  <rect x='3' y='4' width='6' height='6' rx='1'></rect>\n  <rect x='3' y='14' width='6' height='6' rx='1'></rect>\n
</Icon>