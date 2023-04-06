<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle fill='currentColor' cx='12' cy='6' r='1'></circle>\n  <circle fill='currentColor' cx='12' cy='18' r='1'></circle>\n  <line x1='5' y1='12' x2='19' y2='12'></line>\n
</Icon>