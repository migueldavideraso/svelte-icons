<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M4 12v.01'></path>\n  <path d='M8 12v.01'></path>\n  <path d='M12 12v.01'></path>\n  <path d='M16 12v.01'></path>\n  <path d='M20 12v.01'></path>\n
</Icon>