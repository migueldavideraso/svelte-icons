<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='3' y1='12' x2='6' y2='12'></line>\n  <line x1='12' y1='3' x2='12' y2='6'></line>\n  <line x1='7.8' y1='7.8' x2='5.6' y2='5.6'></line>\n  <line x1='16.2' y1='7.8' x2='18.4' y2='5.6'></line>\n  <line x1='7.8' y1='16.2' x2='5.6' y2='18.4'></line>\n  <path d='M12 12l9 3l-4 2l-2 4l-3 -9'></path>\n
</Icon>