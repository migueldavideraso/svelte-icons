<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <circle cx='5' cy='17' r='2'></circle>\n  <circle cx='14' cy='17' r='2'></circle>\n  <line x1='7' y1='17' x2='12' y2='17'></line>\n  <path d='M3 17v-6h13v6'></path>\n  <path d='M5 11v-4h4'></path>\n  <path d='M9 11v-6h4l3 6'></path>\n  <path d='M22 15h-3v-10'></path>\n  <line x1='16' y1='13' x2='19' y2='13'></line>\n
</Icon>