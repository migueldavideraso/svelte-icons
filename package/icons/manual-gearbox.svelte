<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='5' cy='6' r='2'></circle>\n  <circle cx='12' cy='6' r='2'></circle>\n  <circle cx='19' cy='6' r='2'></circle>\n  <circle cx='5' cy='18' r='2'></circle>\n  <circle cx='12' cy='18' r='2'></circle>\n  <line x1='5' y1='8' x2='5' y2='16'></line>\n  <line x1='12' y1='8' x2='12' y2='16'></line>\n  <path d='M19 8v2a2 2 0 0 1 -2 2h-12'></path>\n
</Icon>