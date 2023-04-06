<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M11 21l-1 -4l-2 -3v-6'></path>\n  <path d='M5 14l-1 -3l4 -3l3 2l3 .5'></path>\n  <circle cx='8' cy='4' r='1'></circle>\n  <path d='M7 17l-2 4'></path>\n  <path d='M16 21v-8.5a1.5 1.5 0 0 1 3 0v.5'></path>\n
</Icon>