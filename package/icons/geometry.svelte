<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M7 21l4 -12m2 0l1.48 4.439m.949 2.847l1.571 4.714'></path>\n  <circle cx='12' cy='7' r='2'></circle>\n  <path d='M4 12c1.526 2.955 4.588 5 8 5c3.41 0 6.473 -2.048 8 -5'></path>\n  <path d='M12 5v-2'></path>\n
</Icon>