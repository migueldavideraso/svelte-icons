<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='7' cy='17' r='2'></circle>\n  <circle cx='17' cy='17' r='2'></circle>\n  <path d='M5 17h-2v-11a1 1 0 0 1 1 -1h9v6h-5l2 2m0 -4l-2 2'></path>\n  <line x1='9' y1='17' x2='15' y2='17'></line>\n  <path d='M13 6h5l3 5v6h-2'></path>\n
</Icon>