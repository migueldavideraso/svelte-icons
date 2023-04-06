<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='12' cy='12' r='9'></circle>\n  <line x1='12' y1='3' x2='12' y2='21'></line>\n  <line x1='12' y1='9' x2='16.65' y2='4.35'></line>\n  <line x1='12' y1='14.3' x2='19.37' y2='6.93'></line>\n  <line x1='12' y1='19.6' x2='20.85' y2='10.75'></line>\n
</Icon>