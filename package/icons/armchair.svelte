<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M5 11a2 2 0 0 1 2 2v2h10v-2a2 2 0 1 1 4 0v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2z'></path>\n  <path d='M5 11v-5a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v5'></path>\n  <path d='M6 19v2'></path>\n  <path d='M18 19v2'></path>\n
</Icon>