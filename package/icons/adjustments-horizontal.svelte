<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='14' cy='6' r='2'></circle>\n  <line x1='4' y1='6' x2='12' y2='6'></line>\n  <line x1='16' y1='6' x2='20' y2='6'></line>\n  <circle cx='8' cy='12' r='2'></circle>\n  <line x1='4' y1='12' x2='6' y2='12'></line>\n  <line x1='10' y1='12' x2='20' y2='12'></line>\n  <circle cx='17' cy='18' r='2'></circle>\n  <line x1='4' y1='18' x2='15' y2='18'></line>\n  <line x1='19' y1='18' x2='20' y2='18'></line>\n
</Icon>