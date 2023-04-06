<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='4' y1='20' x2='20' y2='4'></line>\n  <path d='M13 4h7v7'></path>\n  <line x1='6.5' y1='12.5' x2='11.5' y2='17.5'></line>\n
</Icon>