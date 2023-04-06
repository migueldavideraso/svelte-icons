<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M20 20h-16v-16h16'></path>\n  <line x1='4' y1='20' x2='20' y2='4'></line>\n  <path d='M4 12l8 -8'></path>\n  <line x1='12' y1='12' x2='20' y2='20'></line>\n
</Icon>