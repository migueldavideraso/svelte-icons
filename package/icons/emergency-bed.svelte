<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='16' cy='18' r='2'></circle>\n  <circle cx='8' cy='18' r='2'></circle>\n  <path d='M4 8l2.1 2.8a3 3 0 0 0 2.4 1.2h11.5'></path>\n  <path d='M10 6h4'></path>\n  <path d='M12 4v4'></path>\n  <path d='M12 12v2l-2.5 2.5'></path>\n  <path d='M14.5 16.5l-2.5 -2.5'></path>\n
</Icon>