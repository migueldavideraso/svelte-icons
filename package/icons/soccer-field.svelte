<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='12' cy='12' r='3'></circle>\n  <path d='M3 9h3v6h-3z'></path>\n  <path d='M18 9h3v6h-3z'></path>\n  <rect x='3' y='5' width='18' height='14' rx='2'></rect>\n  <line x1='12' y1='5' x2='12' y2='19'></line>\n
</Icon>