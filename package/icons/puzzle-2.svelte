<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect x='4' y='4' width='16' height='16' rx='2'></rect>\n  <path d='M12 4v2.5a0.5 .5 0 0 1 -.5 .5a1.5 1.5 0 0 0 0 3a0.5 .5 0 0 1 .5 .5v1.5'></path>\n  <path d='M12 12v1.5a0.5 .5 0 0 0 .5 .5a1.5 1.5 0 0 1 0 3a0.5 .5 0 0 0 -.5 .5v2.5'></path>\n  <path d='M20 12h-2.5a0.5 .5 0 0 1 -.5 -.5a1.5 1.5 0 0 0 -3 0a0.5 .5 0 0 1 -.5 .5h-1.5'></path>\n  <path d='M12 12h-1.5a0.5 .5 0 0 0 -.5 .5a1.5 1.5 0 0 1 -3 0a0.5 .5 0 0 0 -.5 -.5h-2.5'></path>\n
</Icon>