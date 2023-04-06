<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z'></path>\n  <rect x='3' y='6' width='12' height='12' rx='2'></rect>\n  <line x1='7' y1='12' x2='11' y2='12'></line>\n  <line x1='9' y1='10' x2='9' y2='14'></line>\n
</Icon>