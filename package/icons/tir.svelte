<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='5' cy='17' r='2'></circle>\n  <circle cx='17' cy='17' r='2'></circle>\n  <path d='M7 18h8m4 0h2v-6a5 7 0 0 0 -5 -7h-1l1.5 7h4.5'></path>\n  <path d='M12 18v-13h3'></path>\n  <polyline points='3 17 3 12 12 12'></polyline>\n
</Icon>