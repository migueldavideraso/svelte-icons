<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M7.038 4.5a9 9 0 0 0 -2.495 2.47'></path>\n  <path d='M3.186 10.209a9 9 0 0 0 0 3.508'></path>\n  <path d='M4.5 16.962a9 9 0 0 0 2.47 2.495'></path>\n  <path d='M10.209 20.814a9 9 0 0 0 3.5 0'></path>\n  <path d='M16.962 19.5a9 9 0 0 0 2.495 -2.47'></path>\n  <path d='M20.814 13.791a9 9 0 0 0 0 -3.508'></path>\n  <path d='M19.5 7.038a9 9 0 0 0 -2.47 -2.495'></path>\n  <path d='M13.791 3.186a9 9 0 0 0 -3.508 -.02'></path>\n  <path d='M12 8l-2 4h4l-2 4'></path>\n  <path d='M12 21a9 9 0 0 0 0 -18'></path>\n
</Icon>