<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M7 20v-12a4 4 0 0 1 4 -4h2a4 4 0 0 1 4 4v12'></path>\n  <line x1='7' y1='13' x2='17' y2='13'></line>\n
</Icon>