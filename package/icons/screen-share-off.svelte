<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M21 12v3a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h9'></path>\n  <line x1='7' y1='20' x2='17' y2='20'></line>\n  <line x1='9' y1='16' x2='9' y2='20'></line>\n  <line x1='15' y1='16' x2='15' y2='20'></line>\n  <path d='M17 8l4 -4m-4 0l4 4'></path>\n
</Icon>