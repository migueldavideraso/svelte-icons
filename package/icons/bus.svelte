<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='6' cy='17' r='2'></circle>\n  <circle cx='18' cy='17' r='2'></circle>\n  <path d='M4 17h-2v-11a1 1 0 0 1 1 -1h14a5 7 0 0 1 5 7v5h-2m-4 0h-8'></path>\n  <polyline points='16 5 17.5 12 22 12'></polyline>\n  <line x1='2' y1='10' x2='17' y2='10'></line>\n  <line x1='7' y1='5' x2='7' y2='10'></line>\n  <line x1='12' y1='5' x2='12' y2='10'></line>\n
</Icon>