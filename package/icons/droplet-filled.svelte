<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M6.8 11a6 6 0 1 0 10.396 0l-5.197 -8l-5.2 8z'></path>\n  <path d='M12 3v17'></path>\n  <path d='M12 12l3.544 -3.544'></path>\n  <path d='M12 17.3l5.558 -5.558'></path>\n
</Icon>