<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='6' y1='18' x2='6' y2='18.01'></line>\n  <line x1='10' y1='18' x2='10' y2='18.01'></line>\n  <line x1='14' y1='18' x2='14' y2='18.01'></line>\n  <line x1='18' y1='18' x2='18' y2='18.01'></line>\n
</Icon>