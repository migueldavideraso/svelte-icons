<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='3' y1='21' x2='21' y2='21'></line>\n  <path d='M5 21v-14l8 -4v18'></path>\n  <path d='M19 21v-10l-6 -4'></path>\n  <line x1='9' y1='9' x2='9' y2='9.01'></line>\n  <line x1='9' y1='12' x2='9' y2='12.01'></line>\n  <line x1='9' y1='15' x2='9' y2='15.01'></line>\n  <line x1='9' y1='18' x2='9' y2='18.01'></line>\n
</Icon>