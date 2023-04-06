<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='12' cy='12' r='9'></circle>\n  <path d='M9 3.6c5 6 7 10.5 7.5 16.2'></path>\n  <path d='M6.4 19c3.5 -3.5 6 -6.5 14.5 -6.4'></path>\n  <path d='M3.1 10.75c5 0 9.814 -.38 15.314 -5'></path>\n
</Icon>