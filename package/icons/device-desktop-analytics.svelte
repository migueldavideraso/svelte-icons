<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect x='3' y='4' width='18' height='12' rx='1'></rect>\n  <path d='M7 20h10'></path>\n  <path d='M9 16v4'></path>\n  <path d='M15 16v4'></path>\n  <path d='M9 12v-4'></path>\n  <path d='M12 12v-1'></path>\n  <path d='M15 12v-2'></path>\n  <path d='M12 12v-1'></path>\n
</Icon>