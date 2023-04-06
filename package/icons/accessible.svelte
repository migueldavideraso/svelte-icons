<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='12' cy='12' r='9'></circle>\n  <path d='M10 16.5l2 -3l2 3m-2 -3v-2l3 -1m-6 0l3 1'></path>\n  <circle cx='12' cy='7.5' r='.5' fill='currentColor'></circle>\n
</Icon>