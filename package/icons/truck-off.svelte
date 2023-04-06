<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='7' cy='17' r='2'></circle>\n  <path d='M15.585 15.586a2 2 0 0 0 2.826 2.831'></path>\n  <path d='M5 17h-2v-11a1 1 0 0 1 1 -1h1m3.96 0h4.04v4m0 4v4m-4 0h6m6 0v-6h-6m-2 -5h5l3 5'></path>\n  <line x1='3' y1='3' x2='21' y2='21'></line>\n
</Icon>