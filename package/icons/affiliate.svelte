<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M5.931 6.936l1.275 4.249m5.607 5.609l4.251 1.275'></path>\n  <path d='M11.683 12.317l5.759 -5.759'></path>\n  <circle cx='5.5' cy='5.5' r='1.5'></circle>\n  <circle cx='18.5' cy='5.5' r='1.5'></circle>\n  <circle cx='18.5' cy='18.5' r='1.5'></circle>\n  <circle cx='8.5' cy='15.5' r='4.5'></circle>\n
</Icon>