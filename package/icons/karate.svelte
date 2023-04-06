<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='18' cy='4' r='1'></circle>\n  <path d='M3 9l4.5 1l3 2.5'></path>\n  <path d='M13 21v-8l3 -5.5'></path>\n  <path d='M8 4.5l4 2l4 1l4 3.5l-2 3.5'></path>\n
</Icon>