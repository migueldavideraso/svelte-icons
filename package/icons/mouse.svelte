<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect x='6' y='3' width='12' height='18' rx='4'></rect>\n  <line x1='12' y1='7' x2='12' y2='11'></line>\n
</Icon>