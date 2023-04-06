<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M12 9v12m-8 -8a8 8 0 0 0 16 0m1 0h-2m-14 0h-2'></path>\n  <circle cx='12' cy='6' r='3'></circle>\n
</Icon>