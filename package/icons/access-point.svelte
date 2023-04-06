<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <line x1='12' y1='12' x2='12' y2='12.01'></line>\n  <path d='M14.828 9.172a4 4 0 0 1 0 5.656'></path>\n  <path d='M17.657 6.343a8 8 0 0 1 0 11.314'></path>\n  <path d='M9.168 14.828a4 4 0 0 1 0 -5.656'></path>\n  <path d='M6.337 17.657a8 8 0 0 1 0 -11.314'></path>\n
</Icon>