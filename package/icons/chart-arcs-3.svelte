<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='12' cy='12' r='1'></circle>\n  <path d='M7 12a5 5 0 1 0 5 -5'></path>\n  <path d='M6.29 18.957a9 9 0 1 0 5.71 -15.957'></path>\n
</Icon>