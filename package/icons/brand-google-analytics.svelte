<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect x='10' y='9' width='4' height='12' rx='1.105'></rect>\n  <rect x='17' y='3' width='4' height='18' rx='1.105'></rect>\n  <circle cx='5' cy='19' r='2'></circle>\n
</Icon>