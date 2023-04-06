<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='12' cy='5' r='2'></circle>\n  <circle cx='5' cy='19' r='2'></circle>\n  <circle cx='19' cy='19' r='2'></circle>\n  <path d='M6.5 17.5l5.5 -4.5l5.5 4.5'></path>\n  <line x1='12' y1='7' x2='12' y2='13'></line>\n
</Icon>