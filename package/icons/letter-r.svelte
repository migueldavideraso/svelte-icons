<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M7 20v-16h5.5a4 4 0 0 1 0 9h-5.5'></path>\n  <line x1='12' y1='13' x2='17' y2='20'></line>\n
</Icon>