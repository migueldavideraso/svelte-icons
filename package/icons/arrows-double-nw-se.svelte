<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M14 21l-11 -11'></path>\n  <path d='M3 14v-4h4'></path>\n  <path d='M17 14h4v-4'></path>\n  <line x1='10' y1='3' x2='21' y2='14'></line>\n
</Icon>