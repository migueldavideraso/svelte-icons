<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect x='4' y='4' width='16' height='16' rx='2'></rect>\n  <line x1='4' y1='16' x2='20' y2='16'></line>\n  <path d='M4 12l3 -3c.928 -.893 2.072 -.893 3 0l4 4'></path>\n  <path d='M13 12l2 -2c.928 -.893 2.072 -.893 3 0l2 2'></path>\n  <line x1='14' y1='7' x2='14.01' y2='7'></line>\n
</Icon>