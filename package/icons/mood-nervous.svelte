<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='12' cy='12' r='9'></circle>\n  <path d='M9 10h.01'></path>\n  <path d='M15 10h.01'></path>\n  <path d='M8 16l2 -2l2 2l2 -2l2 2'></path>\n
</Icon>