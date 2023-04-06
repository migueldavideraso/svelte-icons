<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='3' y1='12' x2='3' y2='12.01'></line>\n  <line x1='7' y1='12' x2='17' y2='12'></line>\n  <line x1='21' y1='12' x2='21' y2='12.01'></line>\n
</Icon>