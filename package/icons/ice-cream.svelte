<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M12 21.5v-4.5'></path>\n  <path d='M8 17h8v-10a4 4 0 1 0 -8 0v10z'></path>\n  <path d='M8 10.5l8 -3.5'></path>\n  <path d='M8 14.5l8 -3.5'></path>\n
</Icon>