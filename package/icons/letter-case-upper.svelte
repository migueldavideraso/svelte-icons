<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M3 19v-10.5a3.5 3.5 0 0 1 7 0v10.5'></path>\n  <path d='M3 13h7'></path>\n  <path d='M14 19v-10.5a3.5 3.5 0 0 1 7 0v10.5'></path>\n  <path d='M14 13h7'></path>\n
</Icon>