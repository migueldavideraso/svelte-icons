<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='12' cy='12' r='5'></circle>\n  <path d='M12 7v-4m-1 0h2'></path>\n  <path d='M12 7v-4m-1 0h2' transform='rotate(45 12 12)'></path>\n  <path d='M12 7v-4m-1 0h2' transform='rotate(90 12 12)'></path>\n  <path d='M12 7v-4m-1 0h2' transform='rotate(135 12 12)'></path>\n  <path d='M12 7v-4m-1 0h2' transform='rotate(180 12 12)'></path>\n  <path d='M12 7v-4m-1 0h2' transform='rotate(225 12 12)'></path>\n  <path d='M12 7v-4m-1 0h2' transform='rotate(270 12 12)'></path>\n  <path d='M12 7v-4m-1 0h2' transform='rotate(315 12 12)'></path>\n
</Icon>