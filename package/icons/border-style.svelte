<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M4 20v-14a2 2 0 0 1 2 -2h14'></path>\n  <path d='M20 8v.01'></path>\n  <path d='M20 12v.01'></path>\n  <path d='M20 16v.01'></path>\n  <path d='M8 20v.01'></path>\n  <path d='M12 20v.01'></path>\n  <path d='M16 20v.01'></path>\n  <path d='M20 20v.01'></path>\n
</Icon>