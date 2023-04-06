<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='17' cy='17' r='4'></circle>\n  <path d='M17 13v4h4'></path>\n  <path d='M12 3v4a1 1 0 0 0 1 1h4'></path>\n  <path d='M11.5 21h-6.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v2m0 3v4'></path>\n
</Icon>