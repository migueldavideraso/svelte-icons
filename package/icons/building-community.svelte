<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M8 9l5 5v7h-5v-4m0 4h-5v-7l5 -5m1 1v-6a1 1 0 0 1 1 -1h10a1 1 0 0 1 1 1v17h-8'></path>\n  <line x1='13' y1='7' x2='13' y2='7.01'></line>\n  <line x1='17' y1='7' x2='17' y2='7.01'></line>\n  <line x1='17' y1='11' x2='17' y2='11.01'></line>\n  <line x1='17' y1='15' x2='17' y2='15.01'></line>\n
</Icon>