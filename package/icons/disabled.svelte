<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='11' cy='5' r='2'></circle>\n  <polyline points='11 7 11 15 15 15 19 20'></polyline>\n  <line x1='11' y1='11' x2='16' y2='11'></line>\n  <path d='M7 11.5a5 5 0 1 0 6 7.5'></path>\n
</Icon>