<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M6 17.6l-2 -1.1v-2.5'></path>\n  <path d='M4 10v-2.5l2 -1.1'></path>\n  <path d='M10 4.1l2 -1.1l2 1.1'></path>\n  <path d='M18 6.4l2 1.1v2.5'></path>\n  <path d='M20 14v2.5l-2 1.12'></path>\n  <path d='M14 19.9l-2 1.1l-2 -1.1'></path>\n  <line x1='12' y1='12' x2='14' y2='10.9'></line>\n  <line x1='18' y1='8.6' x2='20' y2='7.5'></line>\n  <line x1='12' y1='12' x2='12' y2='14.5'></line>\n  <line x1='12' y1='18.5' x2='12' y2='21'></line>\n  <path d='M12 12l-2 -1.12'></path>\n  <line x1='6' y1='8.6' x2='4' y2='7.5'></line>\n
</Icon>