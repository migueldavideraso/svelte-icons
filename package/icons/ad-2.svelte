<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M11.933 5h-6.933v16h13v-8'></path>\n  <path d='M14 17h-5'></path>\n  <path d='M9 13h5v-4h-5z'></path>\n  <path d='M15 5v-2'></path>\n  <path d='M18 6l2 -2'></path>\n  <path d='M19 9h2'></path>\n
</Icon>