<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='14' y1='12' x2='4' y2='12'></line>\n  <line x1='14' y1='12' x2='10' y2='16'></line>\n  <line x1='14' y1='12' x2='10' y2='8'></line>\n  <line x1='20' y1='4' x2='20' y2='20'></line>\n
</Icon>