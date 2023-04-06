<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='12' cy='14' r='7'></circle>\n  <path d='M12 11v-6a2 2 0 0 1 2 -2h2v1a2 2 0 0 1 -2 2h-2'></path>\n  <path d='M10 10.5c1.333 .667 2.667 .667 4 0'></path>\n
</Icon>