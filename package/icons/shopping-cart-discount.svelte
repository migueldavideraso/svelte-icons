<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='6' cy='19' r='2'></circle>\n  <circle cx='17' cy='19' r='2'></circle>\n  <path d='M17 17h-11v-14h-2'></path>\n  <path d='M20 6l-1 7h-13'></path>\n  <path d='M10 10l6 -6'></path>\n  <circle cx='10.5' cy='4.5' r='.5'></circle>\n  <circle cx='15.5' cy='9.5' r='.5'></circle>\n
</Icon>