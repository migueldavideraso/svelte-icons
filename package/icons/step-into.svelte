<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='12' y1='3' x2='12' y2='15'></line>\n  <line x1='16' y1='11' x2='12' y2='15'></line>\n  <line x1='8' y1='11' x2='12' y2='15'></line>\n  <circle cx='12' cy='20' r='1'></circle>\n
</Icon>