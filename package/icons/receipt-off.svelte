<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M5 21v-16m2 -2h10a2 2 0 0 1 2 2v10m0 4.01v1.99l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2'></path>\n  <line x1='11' y1='7' x2='15' y2='7'></line>\n  <line x1='9' y1='11' x2='11' y2='11'></line>\n  <line x1='13' y1='15' x2='15' y2='15'></line>\n  <line x1='15' y1='11' x2='15' y2='11.01'></line>\n  <line x1='3' y1='3' x2='21' y2='21'></line>\n
</Icon>