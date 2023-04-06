<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect x='5' y='3' width='14' height='18' rx='2'></rect>\n  <circle cx='12' cy='14' r='3'></circle>\n  <line x1='12' y1='7' x2='12' y2='7.01'></line>\n
</Icon>