<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='10' cy='14' r='5'></circle>\n  <line x1='19' y1='5' x2='13.6' y2='10.4'></line>\n  <line x1='19' y1='5' x2='14' y2='5'></line>\n  <line x1='19' y1='5' x2='19' y2='10'></line>\n
</Icon>