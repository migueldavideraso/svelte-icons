<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect x='3' y='5' width='18' height='14' rx='2'></rect>\n  <path d='M7 10h1v4'></path>\n  <path d='M14 14v-4l3 4v-4'></path>\n  <line x1='11' y1='10.5' x2='11' y2='10.51'></line>\n  <line x1='11' y1='13.5' x2='11' y2='13.51'></line>\n
</Icon>