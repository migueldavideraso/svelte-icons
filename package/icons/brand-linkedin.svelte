<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect x='4' y='4' width='16' height='16' rx='2'></rect>\n  <line x1='8' y1='11' x2='8' y2='16'></line>\n  <line x1='8' y1='8' x2='8' y2='8.01'></line>\n  <line x1='12' y1='16' x2='12' y2='11'></line>\n  <path d='M16 16v-3a2 2 0 0 0 -4 0'></path>\n
</Icon>