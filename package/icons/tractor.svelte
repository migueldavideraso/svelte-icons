<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='7' cy='15' r='4'></circle>\n  <line x1='7' y1='15' x2='7' y2='15.01'></line>\n  <circle cx='19' cy='17' r='2'></circle>\n  <line x1='10.5' y1='17' x2='17' y2='17'></line>\n  <path d='M20 15.2v-4.2a1 1 0 0 0 -1 -1h-6l-2 -5h-6v6.5'></path>\n  <path d='M18 5h-1a1 1 0 0 0 -1 1v4'></path>\n
</Icon>