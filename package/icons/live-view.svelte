<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M4 8v-2a2 2 0 0 1 2 -2h2'></path>\n  <path d='M4 16v2a2 2 0 0 0 2 2h2'></path>\n  <path d='M16 4h2a2 2 0 0 1 2 2v2'></path>\n  <path d='M16 20h2a2 2 0 0 0 2 -2v-2'></path>\n  <line x1='12' y1='11' x2='12' y2='11.01'></line>\n  <path d='M12 18l-3.5 -5a4 4 0 1 1 7 0l-3.5 5'></path>\n
</Icon>