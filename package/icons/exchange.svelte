<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='5' cy='18' r='2'></circle>\n  <circle cx='19' cy='6' r='2'></circle>\n  <path d='M19 8v5a5 5 0 0 1 -5 5h-3l3 -3m0 6l-3 -3'></path>\n  <path d='M5 16v-5a5 5 0 0 1 5 -5h3l-3 -3m0 6l3 -3'></path>\n
</Icon>