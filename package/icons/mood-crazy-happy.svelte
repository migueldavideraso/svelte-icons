<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='12' cy='12' r='9'></circle>\n  <line x1='7' y1='8.5' x2='10' y2='11.5'></line>\n  <path d='M7 11.5l3 -3'></path>\n  <line x1='14' y1='8.5' x2='17' y2='11.5'></line>\n  <path d='M14 11.5l3 -3'></path>\n  <path d='M9.5 15a3.5 3.5 0 0 0 5 0'></path>\n
</Icon>