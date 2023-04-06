<script>

	import Icon from '../Icon.svelte'

	export let size = null
	export let strokeSize = null
	export let stroke = null

	$: values = { size, strokeSize, stroke }

</script>

<Icon {values} >
	\n  <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>\n  <rect x='4' y='4' width='16' height='16' rx='4'></rect>\n  <circle cx='12' cy='12' r='3'></circle>\n  <line x1='16.5' y1='7.5' x2='16.5' y2='7.501'></line>\n
</Icon>