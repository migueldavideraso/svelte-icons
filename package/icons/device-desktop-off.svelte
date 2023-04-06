<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M8 4h12a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1m-4 0h-12a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1'></path>\n  <line x1='7' y1='20' x2='17' y2='20'></line>\n  <line x1='9' y1='16' x2='9' y2='20'></line>\n  <line x1='15' y1='16' x2='15' y2='20'></line>\n  <line x1='3' y1='3' x2='21' y2='21'></line>\n
</Icon>