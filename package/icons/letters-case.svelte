<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='18' cy='16' r='3'></circle>\n  <line x1='21' y1='13' x2='21' y2='19'></line>\n  <path d='M3 19v-10a4 4 0 0 1 4 -4a4 4 0 0 1 4 4v10'></path>\n  <line x1='3' y1='13' x2='11' y2='13'></line>\n
</Icon>