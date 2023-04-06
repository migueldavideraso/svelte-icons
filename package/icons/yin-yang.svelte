<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='12' cy='12' r='9'></circle>\n  <path d='M12 3a4.5 4.5 0 0 0 0 9a4.5 4.5 0 0 1 0 9'></path>\n  <circle cx='12' cy='7.5' r='.5' fill='currentColor'></circle>\n  <circle cx='12' cy='16.5' r='.5' fill='currentColor'></circle>\n
</Icon>