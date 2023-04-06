<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='12' y1='6' x2='12' y2='3'></line>\n  <line x1='6' y1='12' x2='3' y2='12'></line>\n  <line x1='7.75' y1='7.75' x2='5.6' y2='5.6'></line>\n
</Icon>