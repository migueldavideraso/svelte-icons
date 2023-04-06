<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='3' y1='21' x2='21' y2='21'></line>\n  <path d='M4 21v-15a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v15'></path>\n  <path d='M9 21v-8a3 3 0 0 1 6 0v8'></path>\n
</Icon>