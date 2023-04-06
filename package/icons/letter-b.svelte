<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M7 20v-16h6a4 4 0 0 1 0 8a4 4 0 0 1 0 8h-6'></path>\n  <line x1='7' y1='12' x2='13' y2='12'></line>\n
</Icon>