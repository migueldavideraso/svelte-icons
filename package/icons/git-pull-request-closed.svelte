<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='6' cy='18' r='2'></circle>\n  <circle cx='6' cy='6' r='2'></circle>\n  <circle cx='18' cy='18' r='2'></circle>\n  <path d='M6 8v8'></path>\n  <path d='M18 11v5'></path>\n  <path d='M16 4l4 4m0 -4l-4 4'></path>\n
</Icon>