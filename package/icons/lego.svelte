<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='9.5' y1='11' x2='9.51' y2='11'></line>\n  <line x1='14.5' y1='11' x2='14.51' y2='11'></line>\n  <path d='M9.5 15a3.5 3.5 0 0 0 5 0'></path>\n  <path d='M7 5h1v-2h8v2h1a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3v1h-10v-1a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3'></path>\n
</Icon>