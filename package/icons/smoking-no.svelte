<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='8' y1='13' x2='8' y2='17'></line>\n  <path d='M16 5v.5a2 2 0 0 0 2 2a2 2 0 0 1 2 2v.5'></path>\n  <line x1='3' y1='3' x2='21' y2='21'></line>\n  <path d='M17 13h3a1 1 0 0 1 1 1v2c0 .28 -.115 .533 -.3 .714m-3.7 .286h-13a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1h9'></path>\n
</Icon>