<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M7 6a7.75 7.75 0 1 0 10 0'></path>\n  <line x1='12' y1='4' x2='12' y2='12'></line>\n
</Icon>