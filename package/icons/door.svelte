<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M14 12v.01'></path>\n  <path d='M3 21h18'></path>\n  <path d='M6 21v-16a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v16'></path>\n
</Icon>