<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect transform='rotate(90 12 12)' x='3' y='5' width='18' height='14' rx='2'></rect>\n  <line x1='8' y1='6' x2='8.01' y2='6'></line>\n  <line x1='16' y1='18' x2='16.01' y2='18'></line>\n  <path d='M12 16l-3 -4l3 -4l3 4z'></path>\n
</Icon>