<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='7' cy='18' r='2'></circle>\n  <circle cx='7' cy='6' r='2'></circle>\n  <circle cx='17' cy='12' r='2'></circle>\n  <line x1='7' y1='8' x2='7' y2='16'></line>\n  <path d='M7 8a4 4 0 0 0 4 4h4'></path>\n
</Icon>