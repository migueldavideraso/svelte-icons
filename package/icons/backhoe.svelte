<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='4' cy='17' r='2'></circle>\n  <circle cx='13' cy='17' r='2'></circle>\n  <line x1='13' y1='19' x2='4' y2='19'></line>\n  <line x1='4' y1='15' x2='13' y2='15'></line>\n  <path d='M8 12v-5h2a3 3 0 0 1 3 3v5'></path>\n  <path d='M5 15v-2a1 1 0 0 1 1 -1h7'></path>\n  <path d='M21.12 9.88l-3.12 -4.88l-5 5'></path>\n  <path d='M21.12 9.88a3 3 0 0 1 -2.12 5.12a3 3 0 0 1 -2.12 -.88l4.24 -4.24z'></path>\n
</Icon>