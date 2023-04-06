<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M18 5h-11h3a4 4 0 0 1 0 8h-3l6 6'></path>\n  <line x1='7' y1='9' x2='18' y2='9'></line>\n
</Icon>