<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='12' cy='7' r='4'></circle>\n  <path d='M6 21v-2a4 4 0 0 1 4 -4h1'></path>\n  <circle cx='16.5' cy='17.5' r='2.5'></circle>\n  <path d='M18.5 19.5l2.5 2.5'></path>\n
</Icon>