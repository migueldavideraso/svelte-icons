<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='18' y1='6' x2='6' y2='18'></line>\n  <line x1='6' y1='6' x2='18' y2='18'></line>\n
</Icon>