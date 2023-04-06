<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M8.003 18.003h-.011'></path>\n  <path d='M12.003 18.002h-.011'></path>\n  <path d='M16.003 18.002h-.011'></path>\n  <path d='M4 3h16'></path>\n  <path d='M5 3v17a1 1 0 0 0 1 1h12a1 1 0 0 0 1 -1v-17'></path>\n  <path d='M14 7h-4'></path>\n  <path d='M9 15h1'></path>\n  <path d='M14 15h1'></path>\n  <path d='M12 11v-4'></path>\n
</Icon>