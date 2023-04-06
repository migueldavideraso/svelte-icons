<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='6' cy='19' r='2'></circle>\n  <path d='M17 17a2 2 0 1 0 2 2'></path>\n  <path d='M17 17h-11v-11'></path>\n  <path d='M9.239 5.231l10.761 .769l-1 7h-2m-4 0h-7'></path>\n  <path d='M3 3l18 18'></path>\n
</Icon>