<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='12' cy='12' r='1'></circle>\n  <path d='M16.924 11.132a5 5 0 1 0 -4.056 5.792'></path>\n  <path d='M3 12a9 9 0 1 0 9 -9'></path>\n
</Icon>