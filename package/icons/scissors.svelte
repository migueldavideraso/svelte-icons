<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='6' cy='7' r='3'></circle>\n  <circle cx='6' cy='17' r='3'></circle>\n  <line x1='8.6' y1='8.6' x2='19' y2='19'></line>\n  <line x1='8.6' y1='15.4' x2='19' y2='5'></line>\n
</Icon>