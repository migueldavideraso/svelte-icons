<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <path d='M8 4h-2l-3 10v2.5'></path>\n  <path d='M16 4h2l3 10v2.5'></path>\n  <line x1='10' y1='16' x2='14' y2='16'></line>\n  <circle cx='17.5' cy='16.5' r='3.5'></circle>\n  <circle cx='6.5' cy='16.5' r='3.5'></circle>\n
</Icon>