<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M12 19v-7l-5 -7m10 0l-5 7'></path>\n  <line x1='8' y1='17' x2='16' y2='17'></line>\n  <line x1='8' y1='13' x2='16' y2='13'></line>\n
</Icon>