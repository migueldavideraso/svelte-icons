<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='3' y1='3' x2='21' y2='21'></line>\n  <path d='M4 7h3m4 0h9'></path>\n  <line x1='10' y1='11' x2='10' y2='17'></line>\n  <line x1='14' y1='14' x2='14' y2='17'></line>\n  <path d='M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l.077 -.923'></path>\n  <line x1='18.384' y1='14.373' x2='19' y2='7'></line>\n  <path d='M9 5v-1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3'></path>\n
</Icon>