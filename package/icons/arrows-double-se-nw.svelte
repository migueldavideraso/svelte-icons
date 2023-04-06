<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='3' y1='10' x2='14' y2='21'></line>\n  <path d='M14 17v4h-4'></path>\n  <path d='M14 3h-4v4'></path>\n  <path d='M21 14l-11 -11'></path>\n
</Icon>