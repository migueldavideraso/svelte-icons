<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4'></path>\n  <line x1='12' y1='11' x2='12' y2='11.01'></line>\n  <line x1='8' y1='11' x2='8' y2='11.01'></line>\n  <line x1='16' y1='11' x2='16' y2='11.01'></line>\n
</Icon>