<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='12' y1='10' x2='12' y2='20'></line>\n  <line x1='12' y1='10' x2='16' y2='14'></line>\n  <line x1='12' y1='10' x2='8' y2='14'></line>\n  <line x1='4' y1='4' x2='20' y2='4'></line>\n
</Icon>