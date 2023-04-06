<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M12 3v5m4 4h5'></path>\n  <path d='M8.929 14.582l-3.429 2.918'></path>\n  <circle cx='12' cy='12' r='4'></circle>\n  <circle cx='12' cy='12' r='9'></circle>\n
</Icon>