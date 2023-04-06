<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M14 3v4a1 1 0 0 0 1 1h4'></path>\n  <path d='M5 8v-3a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5'></path>\n  <circle cx='6' cy='14' r='3'></circle>\n  <path d='M4.5 17l-1.5 5l3 -1.5l3 1.5l-1.5 -5'></path>\n
</Icon>