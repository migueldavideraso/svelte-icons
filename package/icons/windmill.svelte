<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M12 12c2.76 0 5 -2.01 5 -4.5s-2.24 -4.5 -5 -4.5v9z'></path>\n  <path d='M12 12c0 2.76 2.01 5 4.5 5s4.5 -2.24 4.5 -5h-9z'></path>\n  <path d='M12 12c-2.76 0 -5 2.01 -5 4.5s2.24 4.5 5 4.5v-9z'></path>\n  <path d='M12 12c0 -2.76 -2.01 -5 -4.5 -5s-4.5 2.24 -4.5 5h9z'></path>\n
</Icon>