<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='3' y1='21' x2='21' y2='21'></line>\n  <path d='M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16'></path>\n  <path d='M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4'></path>\n  <line x1='10' y1='9' x2='14' y2='9'></line>\n  <line x1='12' y1='7' x2='12' y2='11'></line>\n
</Icon>