<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='6' cy='19' r='2'></circle>\n  <circle cx='17' cy='19' r='2'></circle>\n  <path d='M17 17h-11v-14h-2'></path>\n  <path d='M6 5l7.999 .571m5.43 4.43l-.429 2.999h-13'></path>\n  <path d='M17 3l4 4'></path>\n  <path d='M21 3l-4 4'></path>\n
</Icon>