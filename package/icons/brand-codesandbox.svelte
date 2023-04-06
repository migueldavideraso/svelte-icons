<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M20 7.5v9l-4 2.25l-4 2.25l-4 -2.25l-4 -2.25v-9l4 -2.25l4 -2.25l4 2.25z'></path>\n  <path d='M12 12l4 -2.25l4 -2.25'></path>\n  <line x1='12' y1='12' x2='12' y2='21'></line>\n  <path d='M12 12l-4 -2.25l-4 -2.25'></path>\n  <path d='M20 12l-4 2v4.75'></path>\n  <path d='M4 12l4 2l0 4.75'></path>\n  <path d='M8 5.25l4 2.25l4 -2.25'></path>\n
</Icon>