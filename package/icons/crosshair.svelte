<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M4 8v-2a2 2 0 0 1 2 -2h2'></path>\n  <path d='M4 16v2a2 2 0 0 0 2 2h2'></path>\n  <path d='M16 4h2a2 2 0 0 1 2 2v2'></path>\n  <path d='M16 20h2a2 2 0 0 0 2 -2v-2'></path>\n  <line x1='9' y1='12' x2='15' y2='12'></line>\n  <line x1='12' y1='9' x2='12' y2='15'></line>\n
</Icon>