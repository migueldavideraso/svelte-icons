<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='4' y1='10' x2='4' y2='16'></line>\n  <line x1='20' y1='10' x2='20' y2='16'></line>\n  <path d='M7 9h10v8a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-8a5 5 0 0 1 10 0'></path>\n  <line x1='8' y1='3' x2='9' y2='5'></line>\n  <line x1='16' y1='3' x2='15' y2='5'></line>\n  <line x1='9' y1='18' x2='9' y2='21'></line>\n  <line x1='15' y1='18' x2='15' y2='21'></line>\n
</Icon>