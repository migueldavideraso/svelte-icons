<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='3' y1='21' x2='21' y2='21'></line>\n  <path d='M10 21v-4a2 2 0 0 1 4 0v4'></path>\n  <line x1='10' y1='5' x2='14' y2='5'></line>\n  <line x1='12' y1='3' x2='12' y2='8'></line>\n  <path d='M6 21v-7m-2 2l8 -8l8 8m-2 -2v7'></path>\n
</Icon>