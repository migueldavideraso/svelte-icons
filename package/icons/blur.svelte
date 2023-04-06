<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M12 21a9.01 9.01 0 0 0 2.32 -.302a9.004 9.004 0 0 0 1.74 -16.733a9 9 0 1 0 -4.06 17.035z'></path>\n  <path d='M12 3v17'></path>\n  <path d='M12 12h9'></path>\n  <path d='M12 9h8'></path>\n  <path d='M12 6h6'></path>\n  <path d='M12 18h6'></path>\n  <path d='M12 15h8'></path>\n
</Icon>