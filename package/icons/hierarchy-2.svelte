<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M10 3h4v4h-4z'></path>\n  <path d='M3 17h4v4h-4z'></path>\n  <path d='M17 17h4v4h-4z'></path>\n  <path d='M7 17l5 -4l5 4'></path>\n  <line x1='12' y1='7' x2='12' y2='13'></line>\n
</Icon>