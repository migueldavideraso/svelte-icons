<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='12' cy='20' r='1'></circle>\n  <path d='M3 11l5.5 5.5a5 5 0 0 1 7 0l5.5 -5.5a12 12 0 0 0 -18 0'></path>\n  <line x1='12' y1='20' x2='12' y2='6'></line>\n  <path d='M4 6a4 4 0 0 1 .4 -1.8'></path>\n  <path d='M7 2.1a4 4 0 0 1 2 0'></path>\n  <path d='M12 6a4 4 0 0 0 -.4 -1.8'></path>\n  <path d='M12 6a4 4 0 0 1 .4 -1.8'></path>\n  <path d='M15 2.1a4 4 0 0 1 2 0'></path>\n  <path d='M20 6a4 4 0 0 0 -.4 -1.8'></path>\n
</Icon>