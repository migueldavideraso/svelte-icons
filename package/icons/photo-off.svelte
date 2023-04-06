<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='3' y1='3' x2='21' y2='21'></line>\n  <line x1='15' y1='8' x2='15.01' y2='8'></line>\n  <path d='M19.121 19.122a3 3 0 0 1 -2.121 .878h-10a3 3 0 0 1 -3 -3v-10c0 -.833 .34 -1.587 .888 -2.131m3.112 -.869h9a3 3 0 0 1 3 3v9'></path>\n  <path d='M4 15l4 -4c.928 -.893 2.072 -.893 3 0l5 5'></path>\n  <path d='M16.32 12.34c.577 -.059 1.162 .162 1.68 .66l2 2'></path>\n
</Icon>