<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='14' cy='17' r='3'></circle>\n  <path d='M17 17v-13h4'></path>\n  <path d='M13 5h-10'></path>\n  <line x1='3' y1='9' x2='13' y2='9'></line>\n  <path d='M9 13h-6'></path>\n
</Icon>