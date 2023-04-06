<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='12' cy='5' r='2'></circle>\n  <circle cx='5' cy='19' r='2'></circle>\n  <circle cx='19' cy='19' r='2'></circle>\n  <circle cx='12' cy='14' r='3'></circle>\n  <line x1='12' y1='7' x2='12' y2='11'></line>\n  <line x1='6.7' y1='17.8' x2='9.5' y2='15.8'></line>\n  <line x1='17.3' y1='17.8' x2='14.5' y2='15.8'></line>\n
</Icon>