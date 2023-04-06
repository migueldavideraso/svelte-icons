<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='6' cy='10' r='2'></circle>\n  <line x1='6' y1='4' x2='6' y2='8'></line>\n  <line x1='6' y1='12' x2='6' y2='20'></line>\n  <circle cx='12' cy='16' r='2'></circle>\n  <line x1='12' y1='4' x2='12' y2='14'></line>\n  <line x1='12' y1='18' x2='12' y2='20'></line>\n  <circle cx='18' cy='7' r='2'></circle>\n  <line x1='18' y1='4' x2='18' y2='5'></line>\n  <line x1='18' y1='9' x2='18' y2='20'></line>\n
</Icon>