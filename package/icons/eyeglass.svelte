<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M8 4h-2l-3 10'></path>\n  <path d='M16 4h2l3 10'></path>\n  <line x1='10' y1='16' x2='14' y2='16'></line>\n  <path d='M21 16.5a3.5 3.5 0 0 1 -7 0v-2.5h7v2.5'></path>\n  <path d='M10 16.5a3.5 3.5 0 0 1 -7 0v-2.5h7v2.5'></path>\n
</Icon>