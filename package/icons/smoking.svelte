<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect x='3' y='13' width='18' height='4' rx='1'></rect>\n  <line x1='8' y1='13' x2='8' y2='17'></line>\n  <path d='M16 5v.5a2 2 0 0 0 2 2a2 2 0 0 1 2 2v.5'></path>\n
</Icon>