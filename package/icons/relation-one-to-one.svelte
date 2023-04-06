<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect x='3' y='5' width='18' height='14' rx='2'></rect>\n  <path d='M8 10h1v4'></path>\n  <path d='M15 10h1v4'></path>\n  <line x1='12' y1='10.5' x2='12' y2='10.51'></line>\n  <line x1='12' y1='13.5' x2='12' y2='13.51'></line>\n
</Icon>