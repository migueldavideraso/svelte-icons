<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='10' cy='17' r='2'></circle>\n  <path d='M7 6l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-5m0 -6h8m-6 0v-5m2 0h-4'></path>\n  <path d='M14 8v-2'></path>\n  <path d='M19 12h2'></path>\n  <path d='M17.5 15.5l1.5 1.5'></path>\n  <path d='M17.5 8.5l1.5 -1.5'></path>\n
</Icon>