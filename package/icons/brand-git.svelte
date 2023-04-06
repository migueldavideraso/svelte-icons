<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='16' cy='12' r='1'></circle>\n  <circle cx='12' cy='8' r='1'></circle>\n  <circle cx='12' cy='16' r='1'></circle>\n  <path d='M12 15v-6'></path>\n  <path d='M15 11l-2 -2'></path>\n  <path d='M11 7l-1.9 -1.9'></path>\n  <path d='M10.5 20.4l-6.9 -6.9c-.781 -.781 -.781 -2.219 0 -3l6.9 -6.9c.781 -.781 2.219 -.781 3 0l6.9 6.9c.781 .781 .781 2.219 0 3l-6.9 6.9c-.781 .781 -2.219 .781 -3 0z'></path>\n
</Icon>