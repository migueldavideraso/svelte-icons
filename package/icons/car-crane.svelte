<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='5' cy='17' r='2'></circle>\n  <circle cx='17' cy='17' r='2'></circle>\n  <path d='M7 18h8m4 0h2v-6a5 5 0 0 0 -5 -5h-1l1.5 5h4.5'></path>\n  <path d='M12 18v-11h3'></path>\n  <path d='M3 17v-5h9'></path>\n  <path d='M4 12v-6l18 -3v2'></path>\n  <path d='M8 12v-4l-4 -2'></path>\n
</Icon>