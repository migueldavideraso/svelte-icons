<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='12' cy='12' r='3'></circle>\n  <circle cx='12' cy='12' r='8'></circle>\n  <line x1='12' y1='2' x2='12' y2='4'></line>\n  <line x1='12' y1='20' x2='12' y2='22'></line>\n  <line x1='20' y1='12' x2='22' y2='12'></line>\n  <line x1='2' y1='12' x2='4' y2='12'></line>\n
</Icon>