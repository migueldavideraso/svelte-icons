<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v10'></path>\n  <path d='M9 4v13'></path>\n  <path d='M15 7v5'></path>\n  <circle cx='16.5' cy='17.5' r='2.5'></circle>\n  <path d='M18.5 19.5l2.5 2.5'></path>\n
</Icon>