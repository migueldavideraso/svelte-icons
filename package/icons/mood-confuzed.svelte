<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='12' cy='12' r='9'></circle>\n  <line x1='9' y1='10' x2='9.01' y2='10'></line>\n  <line x1='15' y1='10' x2='15.01' y2='10'></line>\n  <path d='M9.5 16a10 10 0 0 1 6 -1.5'></path>\n
</Icon>