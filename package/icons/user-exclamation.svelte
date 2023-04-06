<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='9' cy='7' r='4'></circle>\n  <path d='M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2'></path>\n  <line x1='19' y1='7' x2='19' y2='10'></line>\n  <line x1='19' y1='14' x2='19' y2='14.01'></line>\n
</Icon>