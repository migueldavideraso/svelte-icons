<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M4 13v.01'></path>\n  <path d='M4 9v.01'></path>\n  <path d='M4 5v.01'></path>\n  <path d='M17 20l3 -3l-3 -3'></path>\n  <path d='M4 17h16'></path>\n
</Icon>